class ChangeReactions < ActiveRecord::Migration[5.0]
  def change
    change_column :reactions, :article_id, 'integer USING CAST(article_id AS integer)'
    change_column :reactions, :user_id, 'integer USING CAST(user_id AS integer)'
  end
end
