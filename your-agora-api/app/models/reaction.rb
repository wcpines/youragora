# == Schema Information
#
# Table name: reactions
#
#  id         :integer          not null, primary key
#  user_id    :string
#  article_id :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rating     :integer
#

class Reaction < ApplicationRecord

  belongs_to :article
  belongs_to :user


end
