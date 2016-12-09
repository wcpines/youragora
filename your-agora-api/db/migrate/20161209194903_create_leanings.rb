class CreateLeanings < ActiveRecord::Migration[5.0]
  def change
    create_table :leanings do |t|
      t.references :user, foreign_key: true
      t.integer :prog_lean
      t.integer :cons_lean
      t.integer :libr_lean

      t.timestamps
    end
  end
end
