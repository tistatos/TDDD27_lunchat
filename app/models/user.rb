class User < ActiveRecord::Base
  has_and_belongs_to_many :tables, :joint_table => :tables_users

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.image = auth.info.image
      user.name = auth.info.name
      user.oauth_token = auth.credentials.token
    end
  end

  def picture
    facebookAPI.get_picture('me', type: :large)
  end

  def friends
    facebookAPI.get_connections("me", "friends?fields=id,name,picture")
  end

  def self.getLikes
    likes = self.facebookAPI.get_connections("me","likes?fields=name,category,category_list")

    likes_dict = Hash.new()
    while !likes.nil?
      likes.each do |l|
        if likes_dict.has_key?(l['category'])
          likes_dict[l['category']] +=1
        else
          likes_dict[l['category']] = 1
        end
        l['category_list'].each do |cl|
          next if l['category'] == cl['name']
          if likes_dict.has_key?(cl['name'])
            likes_dict[cl['name']] +=1
          else
            likes_dict[cl['name']] = 1
          end
        end unless l['category_list'].nil?
      end
      likes = likes.next_page
    end
    likes_dict = likes_dict.sort{|a,b| b[1]<=>a[1]}
  end

  def first_name
    self.name.split.first
  end
  private
  def facebookAPI
    Koala::Facebook::API.new(self.oauth_token)
  end
end

