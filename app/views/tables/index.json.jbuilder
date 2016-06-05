json.array!(@tables) do |table|
  json.extract! table, :id, :owner, :users, :restaurant
end

