require 'auth'

class SessionsController < ApplicationController

  skip_before_action :authenticate_user

  def create
    user = User.find_by(email: user_params[:email])
    if user
      if user.authenticate(user_params[:password])
        jwt = Auth.issue({user_id: user.id})
        render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}, status => 200
      else
        render :json => { :errors => "email or password not found" }, :status => 422
      end
    else
        render :json => { :errors => "email or password not found" }, :status => 422
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password)
  end

end
