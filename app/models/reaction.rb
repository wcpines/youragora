# == Schema Information
#
# Table name: reactions
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  article_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rating     :integer
#

class Reaction < ApplicationRecord

  belongs_to :article
  belongs_to :user

  # User should not be able to react to an article more than 1x
  validates_uniqueness_of :article_id, scope: :user_id

end
