# == Schema Information
#
# Table name: stashes
#
#  id         :integer          not null, primary key
#  article_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stash < ApplicationRecord
  belongs_to :article
  belongs_to :user

  # user should only be able to stash a given article 1x
  validates_uniqueness_of :article_id, scope: :user_id 

end
