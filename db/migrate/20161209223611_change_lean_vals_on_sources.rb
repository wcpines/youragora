class ChangeLeanValsOnSources < ActiveRecord::Migration[5.0]
  def change
    change_column :sources, :leaning, :string 
  end
end
