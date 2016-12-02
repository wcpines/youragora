class ArticlesController < ApplicationController

  def create

    sources = RandomSourceGenerator.new.random_sources

    article_urls = []

    GoogleNews.get_articles(params[:search_term], sources[0].name, sources[0].domain).each do |article|
      article_urls << article
    end

    GoogleNews.get_articles(params[:search_term], sources[1].name, sources[1].domain).each do |article|
      article_urls << article
    end

    GoogleNews.get_articles(params[:search_term], sources[2].name, sources[2].domain).each do |article|
      article_urls << article
    end

    @articles = article_urls.map do |url|
      Article.new(url: url)
    end

    # binding.pry

  end

end
