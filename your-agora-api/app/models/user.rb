# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_secure_password

  # validates_presence_of :password, length: {minimum: 3, maximum: 50}
  # validates_presence_of :email, length: {minimum: 3, maximum: 50}
  # validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  # validates_uniqueness_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create

  after_create :add_leaning
  before_save :strip_whitespace

  validates_uniqueness_of :email


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


  def strip_whitespace
    self.email = self.email.strip unless self.email.nil?
    self.name = self.name.strip unless self.name.nil?
  end

end
