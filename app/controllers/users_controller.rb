class UsersController < ApplicationController

  skip_before_action :authenticate_user, only: :create

  def index
    # @user defined in ApplicationController. You are signed in when you have a jwt
    # Pretty sure you don't use users/show to signin a user, because you don't have their id
    # until you hit the server and decode their JWT. --cp
    render json: {current_user: @user, leaning_id: @user.leaning.id}
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
      render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}, status => 200
    else
      render :json => { :errors => user.errors.full_messages }, :status => 422
    end
  end

  def update
    @user = current_user
    unless @user.update_attributes(user_params)
      render :json => { :errors => @user.errors.full_messages }, :status => 422
    end
  end

  def destroy
    Leaning.find_by(user_id: current_user.id).destroy
    current_user.destroy
  end


  private

  def user_params
    params.require(:auth).permit(:email, :password, :name)
  end

end
