# == Schema Information
#
# Table name: leanings
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  prog_lean  :integer          default(1)
#  cons_lean  :integer          default(1)
#  libr_lean  :integer          default(1)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Leaning < ApplicationRecord
  belongs_to :user
end
