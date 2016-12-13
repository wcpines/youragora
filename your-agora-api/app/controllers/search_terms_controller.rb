class SearchTermsController < ApplicationController

  skip_before_action :authenticate_user

  def create
    SearchTerm.create(name: params[:search_term])
  end

end
