json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :yelpid, :name, :image, :rating
end

