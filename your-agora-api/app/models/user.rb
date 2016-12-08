# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  password_digest :string
#  r_lean          :integer
#  l_lean          :integer
#  a_lean          :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

class User < ApplicationRecord
  has_secure_password

  # validates_presence_of :password, length: {minimum: 3, maximum: 50}
  # validates_presence_of :email, length: {minimum: 3, maximum: 50}
  # validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  # validates_uniqueness_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  validates_uniqueness_of :email

  has_many :reactions
  has_many :articles, through: :reactions

  has_many :stashes
  has_many :articles, through: :stashes
end
