class UsersController < ApplicationController

  def index
    binding.pry
    @users = User.all
    render json: @users
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
