class AddColumnImgUrlToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :img_url, :string
  end
end
