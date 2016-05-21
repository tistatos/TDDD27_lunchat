class AddNameImageRatingToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :name, :string
    add_column :restaurants, :image, :string
    add_column :restaurants, :rating, :string
  end
end
