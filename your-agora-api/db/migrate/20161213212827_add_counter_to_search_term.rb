class AddCounterToSearchTerm < ActiveRecord::Migration[5.0]
  def change
    add_column :search_terms, :search_count, :integer
  end
end
