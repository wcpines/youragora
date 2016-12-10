class LeaningsController < ApplicationController

  def update
    leaning = Leaning.find(params[:leaning][:leaning_id])
    rating = params[:leaning][:rating]
    source_lean = Article.find(params[:leaning][:article_id]).source.leaning
    # => prog_lean (e.g.)

    #@user.leaning:
    # => #<Leaning:0x007f8a42d455c0 id: 1, user_id: 1, prog_lean: 1, cons_lean: 1, libr_lean: 1, created_at: Fri, 09 Dec 2016 22:51:01 UTC +00:00, updated_at: Fri, 09 Dec 2016 22:51:01 UTC +00:00>


    # source
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

end
