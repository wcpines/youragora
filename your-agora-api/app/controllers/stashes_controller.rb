class StashesController < ApplicationController

  def index

    articles = Article.joins(:stashes).where("#{@user.id} = stashes.user_id")
    stashed_articles = articles.map do |article|
      stash = Stash.find_by(article_id: article.id, user_id: @user.id)
      {"id"=> stash.id}.merge({"article"=> stash.article.attributes.merge({"sourceName"=> stash.article.source.name})})
    end

    render json: stashed_articles

  end

  def create
    Stash.find_or_create_by(stash_params)

    articles = Article.joins(:stashes).where("#{@user.id} = stashes.user_id")
    stashed_articles = articles.map do |article|
      stash = Stash.find_by(article_id: article.id, user_id: @user.id)
      {"id"=> stash.id}.merge({"article"=> stash.article.attributes.merge({"sourceName"=> stash.article.source.name})})
    end

    render json: stashed_articles
  end

  def destroy

    stash = Stash.find(params[:id])
    Stash.destroy(stash.id)
    articles = Article.joins(:stashes).where("#{@user.id} = stashes.user_id")

    stashed_articles = articles.map do |article|
      stash = Stash.find_by(article_id: article.id, user_id: @user.id)
      source_name = Source.find(article.source_id).name
      {id: stash.id, article: article, source_name: source_name}
    end

    render json: stashed_articles

  end

  private

  def stash_params
    params.require(:stash).permit(:user_id, :article_id)
  end

end
