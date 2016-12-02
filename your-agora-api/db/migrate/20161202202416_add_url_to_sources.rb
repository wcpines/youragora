class AddUrlToSources < ActiveRecord::Migration[5.0]
  def change
    add_column :sources, :url, :string 
  end
end
