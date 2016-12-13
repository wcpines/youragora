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

=begin auth flow notes

1. Sign up
2. signUp Email and password => users/create
3. Create a user, issue a token using algo, secret key, user_id/pass (Auth.issue)
4. Returns JWT as json, or throws an error/returns 404
5. JWT comes in as data in signUp.js, assigned to localstorage
6. Dispatches login_user action with current_user payload; user's id.
7. State reads {making_user: false, currentUser: [user_id] }
8.

=end
