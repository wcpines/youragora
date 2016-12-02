class Article < ApplicationRecord

  has_many :ratings
  has_many :users, through: :ratings
  belongs_to :source

end
