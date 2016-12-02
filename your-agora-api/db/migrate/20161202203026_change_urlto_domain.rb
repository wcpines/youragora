class ChangeUrltoDomain < ActiveRecord::Migration[5.0]
  def change
    rename_column :sources, :url, :domain
  end
end
