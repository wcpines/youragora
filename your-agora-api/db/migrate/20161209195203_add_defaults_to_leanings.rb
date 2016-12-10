class AddDefaultsToLeanings < ActiveRecord::Migration[5.0]
  def change
    change_column :leanings, :cons_lean, :integer, :default => 1
    change_column :leanings, :libr_lean, :integer, :default => 1
    change_column :leanings, :prog_lean, :integer, :default => 1
  end
end
