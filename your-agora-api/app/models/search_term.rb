# == Schema Information
#
# Table name: search_terms
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SearchTerm < ApplicationRecord

  has_many :article_searches
  has_many :articles, through: :article_searches

  validates_uniqueness_of :name
end
