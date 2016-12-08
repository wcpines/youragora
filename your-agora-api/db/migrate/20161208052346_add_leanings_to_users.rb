class AddLeaningsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :r_lean, :integer
    add_column :users, :l_lean, :integer
    add_column :users, :a_lean, :integer
  end
end

