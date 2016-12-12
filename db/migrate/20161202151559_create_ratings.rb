class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.string :user_id
      t.string :article_id

      t.timestamps
    end
  end
end
