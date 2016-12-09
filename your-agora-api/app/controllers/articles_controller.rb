class ArticlesController < ApplicationController
  skip_before_action :authenticate_user

  def fetch_first_article

    # if @user
    #
    #   sources = WeightedSourceGenerator.new(@user).get_weighted_sources
    #   # => [ full of source objects ]
    #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
    #   # => {Mises: 2, Huff: 3, ...}
    #
    # else
    #
    #   sources = RandomSourceGenerator.random_sources
    #
    #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
    #
    # end
    #
    #   articles = []
    #
    #   source_domains.each do |domain, num_of_articles|
    #     case domain
    #     when "mises.org"
    #       Mises.get_articles(num_of_articles, params[:search_term]).each do |article_url|
    #         articles << {url: article_url, source_id: 6}
    #       end
    #     else
    #       GoogleNews.get_articles(num_of_articles, params[:search_term], domain).each do |article_url|
    #         articles << {url: article_url, source_id: Source.find_by(domain: domain).id}
    #       end
    #     end
    #   end
    #
    #   @full_articles = articles.map do |url_and_source|
    #     article = Article.find_by(url: url_and_source[:url])
    #     if article.nil?
    #       parser = ArticleParser.get_article_html(url_and_source[:url])
    #       next if parser == "Article not found"
    #       parser.assign_attributes(url_and_source)
    #       parser.save
    #       article = parser
    #     end
    #
    #     {article: article, source_name: Source.find(url_and_source[:source_id]).name}
    #
    #   end
    #
    # render json: @full_articles

    @articles = Article.order("RANDOM()")[0...2].map do |article|
      {article: article, source_name: Source.find(article.source_id).name}
    end

    render json: @articles

  end

  def create

      # FOR TESTING
      # sources = Source.order('RANDOM()')[0...1]
      # articles = []

      # if @user
      #
      #   sources = WeightedSourceGenerator.new(@user).get_weighted_sources
      #   # => [ full of source objects ]
      #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
      #   # => {Mises: 2, Huff: 3, ...}
      #
      # else
      #
      #   sources = RandomSourceGenerator.random_sources
      #
      #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
      #
      # end
      #
      #   articles = []
      #
      #   source_domains.each do |domain, num_of_articles|
      #     case domain
      #     when "mises.org"
      #       Mises.get_articles(num_of_articles, params[:search_term]).each do |article_url|
      #         articles << {url: article_url, source_id: Source.find_by(domain: domain).id}
      #       end
      #     else
      #       GoogleNews.get_articles(num_of_articles, params[:search_term], domain).each do |article_url|
      #         articles << {url: article_url, source_id: Source.find_by(domain: domain).id}
      #       end
      #     end
      #   end
      #
      #   @full_articles = articles.map do |url_and_source|
      #     article = Article.find_by(url: url_and_source[:url])
      #     if article.nil?
      #       parser = ArticleParser.get_article_html(url_and_source[:url])
      #       next if parser == "Article not found"
      #       parser.assign_attributes(url_and_source)
      #       parser.save
      #       article = parser
      #     end
      #
      #     {article: article, source_name: Source.find(url_and_source[:source_id]).name}
      #
      #   end
      #
      # render json: @full_articles

      @articles = Article.order("RANDOM()")[0...2].map do |article|
        {article: article, source_name: Source.find(article.source_id).name}
      end

      render json: @articles

  end

end
