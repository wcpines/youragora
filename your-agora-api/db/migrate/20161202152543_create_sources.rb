class CreateSources < ActiveRecord::Migration[5.0]
  def change
    create_table :sources do |t|
      t.string :name
      t.integer :leaning

      t.timestamps
    end
  end
end
