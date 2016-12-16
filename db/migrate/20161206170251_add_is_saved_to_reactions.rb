class AddIsSavedToReactions < ActiveRecord::Migration[5.0]
  def change
    add_column :reactions, :is_saved, :boolean
  end
end
