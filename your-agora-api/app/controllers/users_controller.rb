class UsersController < ApplicationController

  def index
    binding.pry
    @users = User.all
    # render json: {jwt: jwt, current_user: user.id}
    render json: @users
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password)
  end

end
