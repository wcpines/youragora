class UsersController < ApplicationController

  skip_before_action :authenticate_user, only: :create

  def index
    # @user defined in ApplicationController. You are signed in when you have a jwt
    # Pretty sure you don't use users/show to signin a user, because you don't have their id 
    # until you hit the server and decode their JWT. --cp 
    render json: @user
  end

  # def show
  #   user = User.find(params[:id])
  #   jwt = Auth.issue({user_id: user.id})
  #   render json: {jwt: jwt}
  # end

  def create
    user = User.create(user_params)
    if user.persisted?
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, current_user: user}
    else
      render json: {error: "Something is wrong"}, status: 404
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password, :name)
  end

end
