class CreateArticleSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :article_searches do |t|
      t.references :article, foreign_key: true
      t.references :search_term, foreign_key: true

      t.timestamps
    end
  end
end
