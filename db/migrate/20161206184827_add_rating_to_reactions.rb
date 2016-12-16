class AddRatingToReactions < ActiveRecord::Migration[5.0]
  def change
    add_column :reactions, :rating, :integer
  end
end
