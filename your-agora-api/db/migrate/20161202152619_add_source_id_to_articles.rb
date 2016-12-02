class AddSourceIdToArticles < ActiveRecord::Migration[5.0]
  def change
  add_column :articles, :source_id, :integer 
  end
end
