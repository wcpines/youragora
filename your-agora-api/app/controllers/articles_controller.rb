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

    @full_articles = articles.map do |url_and_source_id|

      source_name = Source.find(url_and_source_id[:source_id]).name

      article = Article.find_by(url: url_and_source_id[:url])

      if article.nil?
        parser = ArticleParser.get_article_html(url_and_source_id[:url])
        redacted_content = parser.merge(content: parser[:content].gsub(/#{source_name}/, "REDACTED"))
        article_attributes = redacted_content.merge(url_and_source_id)
        article = Article.create(article_attributes)
      end

      article

    end

    render json: @full_articles

  end

end
