# == Schema Information
#
# Table name: article_searches
#
#  id             :integer          not null, primary key
#  article_id     :integer
#  search_term_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class ArticleSearch < ApplicationRecord

  belongs_to :article
  belongs_to :search_term

end
