require 'jwt'

class Auth

  SECRET_KEY_BASE = Rails.application.secrets[:secret_key_base]
  ALGORITHM = 'HS256'

  def self.issue(payload)
    JWT.encode(payload, SECRET_KEY_BASE, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, SECRET_KEY_BASE, true, {algorithm: ALGORITHM})
  end

end
