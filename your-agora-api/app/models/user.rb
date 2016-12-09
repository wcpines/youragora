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
  after_create :add_leaning

  has_many :reactions
  has_many :articles, through: :reactions

  has_many :stashes
  has_many :articles, through: :stashes

  has_one :leaning


  def prog_lean
    self.leaning.prog_lean
  end

  def libr_lean
    self.leaning.libr_lean
  end

  def cons_lean
    self.leaning.cons_lean
  end

  def add_leaning
    Leaning.create(user_id: self.id)
  end


end
