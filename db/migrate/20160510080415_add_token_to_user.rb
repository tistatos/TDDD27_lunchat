class AddTokenToUser < ActiveRecord::Migration
  def change
    add_column :users, :oauth_token, :string
    add_column :users, :token_expire, :time
  end
end
