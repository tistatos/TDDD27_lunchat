class AddUserIdToTable < ActiveRecord::Migration
  def change
    add_column :tables, :user_id, :integer
  end
end
