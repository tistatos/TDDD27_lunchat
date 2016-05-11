class Restaurant < ActiveRecord::Base
  #validates :yelpid, precence: true
  has_many :table
end

