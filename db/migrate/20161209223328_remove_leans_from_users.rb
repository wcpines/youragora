class RemoveLeansFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :r_lean, :integer
    remove_column :users, :l_lean, :integer
    remove_column :users, :a_lean, :integer
  end
end
