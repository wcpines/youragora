class StashesController < ApplicationController

  # list users stashes
  def index
    # Article.joins(? 


    # NOTE: Not as good: 
    # stashes = Stash.where(user_id: @user.id).pluck(:article_id)
    # Article.where("id in (?)", stashes) 

    render json: Article.joins(:stashes).where("#{@user.id} = stashes.user_id")  # NTS: second half of this is raw sql not ruby, hence no interpolation


  end

  # stash an article
  def create
    stash = Stash.find_or_create_by(stash_params)
    render json: Article.find(stash.article_id)
  end

  # see a stashed article
  def show

  end

  # un-stash an article
  def delete
    
    stash = Stash.find_by(stash_params)
    byebug
    Stash.destroy(stash.id)
    render json: Article.find(stash.article_id)
  end

  private

  def stash_params
    params.require(:stash).permit(:user_id, :article_id)
  end 

end
