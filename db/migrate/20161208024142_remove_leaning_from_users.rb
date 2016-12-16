class RemoveLeaningFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :leaning
  end
end
