class Rating < ApplicationRecord

  belogns_to :article
  belongs_to :user

end
