class RemoveIsSavedFromReactions < ActiveRecord::Migration[5.0]
  def change
    remove_column :reactions, :is_saved
  end
end
