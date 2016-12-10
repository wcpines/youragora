class ReactionsController < ApplicationController

  def create

    Reaction.create(reaction_params)

  end

  private

  def reaction_params
    params.require(:reaction).permit(:user_id, :article_id, :rating)
  end

end
