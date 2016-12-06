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
#  img_url    :string
#

class Article < ApplicationRecord

  has_many :reactions
  has_many :users, through: :reactions

  has_many :stashes
  has_many :users, through: :stashes

  belongs_to :source

end
