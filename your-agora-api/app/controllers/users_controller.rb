class UsersController < ApplicationController

  skip_before_action :authenticate_user

  def index
    user_id = Auth.decode(request.env["HTTP_AUTHORIZATION"]).first['user_id']
    @user = User.find(user_id)
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
      render json: {jwt: jwt, current_user: user.id}
    else
      render json: {error: "Something is wrong"}, status: 404
    end
  end

  private

  def user_params
    params.require(:auth).permit(:email, :password, :name)
  end

end
