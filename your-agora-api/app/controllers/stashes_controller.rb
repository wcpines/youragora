class StashesController < ApplicationController

  skip_before_action :authenticate_user

  # list users stashes
  def index

  end

  # stash an article
  def create
    Stash.find_or_create_by(stash_params)
  end

  # see a stashed article
  def show

  end

  # un-stash an article
  def delete

  end

  private

  def stash_params
    params.require(:stash).permit(:article_id, :user_id)
  end
end
