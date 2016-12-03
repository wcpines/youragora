# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  source_id  :integer
#  author     :string
#  content    :string
#  word_count :integer
#

class Article < ApplicationRecord

  has_many :ratings
  has_many :users, through: :ratings
  belongs_to :source

end
