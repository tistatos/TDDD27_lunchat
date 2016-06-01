class AddUsersTablesJoinTable < ActiveRecord::Migration
  def change
    create_table :tables_users do |t|
      t.integer :table_id
      t.integer :user_id
    end
  end
end

