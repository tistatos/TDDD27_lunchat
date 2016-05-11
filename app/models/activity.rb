class Activity < ActiveRecord::Base
  belongs_to :Table
  has_many :User
end

