# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  leaning         :integer
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_secure_password

  # validates_presence_of :password, length: {minimum: 3, maximum: 50}
  # validates_presence_of :email, length: {minimum: 3, maximum: 50}
  # validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create

  has_many :reactions
  has_many :articles, through: :reactions

  has_many :stashes
  has_many :articles, through: :stashes
end
