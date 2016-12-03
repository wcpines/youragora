class ArticlesController < ApplicationController

  def create

    sources = RandomSourceGenerator.new.random_sources

    articles = []

    sources.each do |source|

      case source.name
      when "Mises"
        Mises.get_articles(params[:search_term]).each do |article_url|
          articles << {url: article_url, source_id: 6}
        end
      else
        GoogleNews.get_articles(params[:search_term], source.name, source.domain).each do |article_url|
          articles << {url: article_url, source_id: source.id}
        end
      end

    end

    @full_articles = articles.map do |article_hash|
      parser = ArticleParser.get_article_html(article_hash[:url])
      article_attributes = parser.merge(article_hash)
      Article.find_or_create_by(article_attributes)
    end

    render json: @full_articles

  end

end
