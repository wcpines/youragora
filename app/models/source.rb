# == Schema Information
#
# Table name: sources
#
#  id         :integer          not null, primary key
#  name       :string
#  leaning    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  domain     :string
#

class Source < ApplicationRecord

  has_many :articles

  validates :leaning,
    inclusion: { in: [ 'cons_lean', 'libr_lean', 'prog_lean'] }


end
