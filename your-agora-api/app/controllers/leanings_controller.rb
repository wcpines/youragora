class LeaningsController < ApplicationController

  def update
    
    leaning = Leaning.find(params[:leaning][:leaning_id])
    rating = params[:leaning][:rating]
    source_lean = Article.find(params[:leaning][:article_id]).source.leaning

    unless rating == -1 && @user.leaning[source_lean] < 2

      case source_lean
      when "prog_lean"
        leaning.prog_lean += rating
      when "libr_lean"
        leaning.libr_lean += rating
      when "cons_lean"
        leaning.cons_lean += rating
      end

      leaning.save

    end

  end

  def reset
    @user.leaning.update_attributes!(prog_lean: 5, cons_lean: 5, libr_lean: 5)
  end

end
