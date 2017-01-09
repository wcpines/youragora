class ReactionsController < ApplicationController


  def index

    articles = Article.joins(:reactions).where("#{@user.id} = reactions.user_id and reactions.created_at > now() - interval '14 days'")
    article_reactions = articles.map do |article|
      reaction = Reaction.find_by(article_id: article.id, user_id: @user.id)

      {
        id: reaction.id,
        rating: reaction.rating,
        article_title: article.title,
        article_url: article.url,
        article_author: article.author,
      }

    end

    render json: article_reactions

  end

  def create
    Reaction.create(reaction_params)
  end

  private

  def reaction_params
    params.require(:reaction).permit(:user_id, :article_id, :rating)
  end

end
