class ArticlesController < ApplicationController

  def create

    sources = RandomSourceGenerator.new.random_sources
    # JK: using the articles array, is sandwich code.  instead use map.
    # Also, this logic should be pulled out into a service object.
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
      article = Article.find_by(url: article_hash[:url])
      if article.nil?
        parser = ArticleParser.get_article_html(article_hash[:url])
        article_attributes = parser.merge(article_hash)
        article = Article.create(article_attributes)
      end
      article
    end

    render json: @full_articles

  end

end
