class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.text :yelpid

      t.timestamps null: false
    end
  end
end
