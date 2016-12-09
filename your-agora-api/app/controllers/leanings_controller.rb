class LeaningsController < ApplicationController

  def update
    binding.pry
    leaning = Leaning.find(params[:leaning][:leaning_id])
    rating = params[:leaning][:rating]
    source_lean = Article.find(params[:leaning][:article_id]).source.leaning


    if rating == -1 && @user.leaning[source.leaning.to_sym] < 2

      # @user.leaning[:cons_lean]


    else
      case source_lean
      when 1
        leaning.prog_lean += rating
      when 2
        leaning.libr_lean += rating
      when 3
        leaning.anar_lean += rating
      end
    end

    leaning.save

  end

end
