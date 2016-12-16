class ApplicationController < ActionController::API

  before_action :authenticate_user

  def signed_in?
    !!current_user
  end

  def current_user

    unless request.env["HTTP_AUTHORIZATION"].empty?

      auth_string = Auth.decode(request.env["HTTP_AUTHORIZATION"])[0] #

      @user = User.find(auth_string["user_id"])

    end

  end

  def authenticate_user
    render json: {error: "Raaawr! Unauthorized Dinosaur!"} unless signed_in?
  end

end
