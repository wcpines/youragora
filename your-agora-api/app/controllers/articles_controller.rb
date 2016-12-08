class ArticlesController < ApplicationController
  skip_before_action :authenticate_user

  def fetch_first_article

    # sources = Source.order('RANDOM()')[0...1]
    # articles = []
    #
    # sources.each do |source|
    #   case source.name
    #   when "Mises"
    #     Mises.get_articles(params[:search_term]).each do |article_url|
    #       articles << {url: article_url, source_id: 6}
    #     end
    #   else
    #     GoogleNews.get_articles(params[:search_term], source.name, source.domain).each do |article_url|
    #       articles << {url: article_url, source_id: source.id}
    #     end
    #   end
    # end
    #
    # @full_articles = articles.map do |url_and_source|
    #   article = Article.find_by(url: url_and_source[:url])
    #   if article.nil?
    #     parser = ArticleParser.get_article_html(url_and_source[:url])
    #     parser.assign_attributes(url_and_source)
    #     parser.save
    #     article = parser
    #   end
    #
    #   {article: article, source_name: Source.find(url_and_source[:source_id]).name}
    #
    # end
    #
    # render json: @full_articles

    binding.pry

    @articles = Article.order("RANDOM()")[0...1].map do |article|
      {article: article, source_name: Source.find(article.source_id).name}
    end

    render json: @articles


  end

  def create

    # # NOTE: PROD
    # sources = RandomSourceGenerator.new.random_sources
    #
    # articles = []
    #
    # sources.each do |source|
    #
    #   case source.name
    #   when "Mises"
    #     Mises.get_articles(params[:search_term]).each do |article_url|
    #       articles << {url: article_url, source_id: 6}
    #     end
    #   else
    #     GoogleNews.get_articles(params[:search_term], source.name, source.domain).each do |article_url|
    #       articles << {url: article_url, source_id: source.id}
    #     end
    #   end
    #
    # end
    #
    # @full_articles = articles.map do |url_and_source|
      # article = Article.find_by(url: url_and_source[:url])
      # unless Stash.find_by(user_id: @user.id, article_id: article.id)
    #   if article.nil?
    #     parser = ArticleParser.get_article_html(url_and_source[:url])
    #     parser.assign_attributes(url_and_source)
    #     parser.save
    #     article = parser
    #   end
    #
    #   {article: article, source_name: Source.find(url_and_source[:source_id]).name}
    # end
    #
    # end
    #
    # puts sources
    #
    # render json: @full_articles

    @articles = Article.order("RANDOM()")[0...2].map do |article|
      {article: article, source_name: Source.find(article.source_id).name}
    end

    render json: @articles

  end

end
