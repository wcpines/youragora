class ApplicationController < ActionController::API

  before_action :authenticate_user

  def signed_in?
    !!current_user
  end

  def current_user
    # NOTE: This is fixing something that's probably due to us implementing this incorrectly.
    # Why does request method change request.env object type to/from an array?

    unless request.env["HTTP_AUTHORIZATION"].empty?

      # if request.env["REQUEST_METHOD"] == "POST"
      #   auth_string = Auth.decode(request.env["HTTP_AUTHORIZATION"])[0] # dafuq
      # else
      #   auth_string = Auth.decode(request.env["HTTP_AUTHORIZATION"])
      # end

      auth_string = Auth.decode(request.env["HTTP_AUTHORIZATION"])[0] # 

      @user = User.find(auth_string["user_id"])

    end

  end

  def authenticate_user
    render json: {error: "Raaawr! Unauthorized Dinosaur!"} unless signed_in?
  end

end
