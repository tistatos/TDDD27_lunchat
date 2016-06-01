class Table < ActiveRecord::Base
  belongs_to :restaurant
  has_and_belongs_to_many :users, :class_name => 'User', :join_table => :tables_users, association_foreign_key: 'user_id'
  belongs_to :owner, :class_name => 'User'
end

