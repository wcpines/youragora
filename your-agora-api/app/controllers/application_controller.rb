class ApplicationController < ActionController::API

  before_action :authenticate_user

  def signed_in?
    !!current_user
  end

  def current_user
    binding.pry
    unless request.env["HTTP_AUTHORIZATION"].empty?
      User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])["user_id"])
    end
  end

  def authenticate_user
    render json: {error: "Raaawr! Unauthorized Dinosaur!"} unless signed_in?
  end

end
