class UsersController < ApplicationController

  def index
    @users = User.all
    # render json: {jwt: jwt, current_user: user.id}
    render json: @users
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
      render json: {jwt: jwt, current_user: user.id}
    else 
      render json: {error: "Something is wrong"}, status: 404
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password)
  end

end
