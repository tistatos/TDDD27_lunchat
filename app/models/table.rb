class Table < ActiveRecord::Base
  belongs_to :Restaurant
  belongs_to :User
  has_many :User
end

