class Table < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :user
  has_many :users
end

