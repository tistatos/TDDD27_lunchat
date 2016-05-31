json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :yelpid, :name, :image, :rating, :link, :tables
end

