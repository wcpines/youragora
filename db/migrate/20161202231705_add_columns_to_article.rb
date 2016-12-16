class AddColumnsToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :author, :string
    add_column :articles, :content, :string
    add_column :articles, :word_count, :integer
  end
end
