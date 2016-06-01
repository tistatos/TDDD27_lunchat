json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :yelpid, :name, :image, :rating, :link
  json.tables restaurant.tables do |table|
    json.extract! table, :id, :owner, :users
  end
end

