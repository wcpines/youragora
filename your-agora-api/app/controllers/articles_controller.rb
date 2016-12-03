class ArticlesController < ApplicationController

  def create

    sources = RandomSourceGenerator.new.random_sources

    articles = []

    GoogleNews.get_articles(params[:search_term], sources[0].name, sources[0].domain).each do |article_url|
      articles << {url: article_url, source_id: sources[0].id}
    end

    GoogleNews.get_articles(params[:search_term], sources[1].name, sources[1].domain).each do |article_url|
      articles << {url: article_url, source_id: sources[1].id}
    end

    GoogleNews.get_articles(params[:search_term], sources[2].name, sources[2].domain).each do |article_url|
      articles << {url: article_url, source_id: sources[2].id}
    end

    @full_articles = articles.map do |article_hash|
      parser = ArticleParser.get_article_html(article_hash[:url])
      article_attributes = parser.merge(article_hash)
      Article.find_or_create_by(article_attributes)
    end

    render json: @full_articles

  end

end

