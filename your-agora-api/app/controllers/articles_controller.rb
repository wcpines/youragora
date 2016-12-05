class ArticlesController < ApplicationController
  skip_before_action :authenticate_user

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

    @full_articles = articles.map do |url_and_source|
      article = Article.find_by(url: url_and_source[:url])
      if article.nil?
        parser = ArticleParser.get_article_html(url_and_source[:url])
        redacted_content = parser[:content].gsub(/#{source_name}/, "REDACTED")
        parser_results = parser.merge(content: redacted_content)
        parser_results.assign_attributes(url_and_source)
        parser_results.save
        parser_results
      end
    end

    render json: @full_articles

  end

end


# # First we have an array of all possible names for a source
# names = ['The New York Times', 'The Times']
#
# # Create a new regex with all the possible names
# re = Regexp.new(names.join('|'))
#
# parser[:content].gsub(re, "REDACTED")
