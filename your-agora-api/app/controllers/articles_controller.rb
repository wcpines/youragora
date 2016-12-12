class ArticlesController < ApplicationController

  skip_before_action :authenticate_user

  def fetch_first_article


    ###### PRODUCTION ######

    # source_domains = {Source.where("leaning = 'prog_lean'").order("RANDOM()").limit(1)[0].domain => 1,
    #   Source.where("leaning = 'cons_lean'").order("RANDOM()").limit(1)[0].domain => 1,
    #   Source.where("leaning = 'libr_lean'").order("RANDOM()").limit(1)[0].domain => 1}

    # articles = get_articles_from_domains(source_domains)

    # @full_articles = run_parser(articles)

    ###### PRODUCTION END ######

    ###### TESTING ######
    @full_articles = Article.order("RANDOM()")[0...2].map do |article|
      article.attributes.merge({"sourceName" => article.source.name})
      # !!Note Source Name camel case because it's going to JS
    end
    ###### TESTING  END ######

    # If the parser breaks it will return back nil so
    # we need to remove those before sending the data back
    render json: @full_articles.compact

  end

  def create

    ###### PRODUCTION ######
    # unless params[:current_user_id].nil?

    #   @user = User.find params[:current_user_id]
    #   sources = WeightedSourceGenerator.new(@user).get_weighted_sources
    #   # => [ full of source objects ]
    #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
    #   # => {mises.org: 2, huffingtonpost.com: 3, ...}
    # else

    #   sources = RandomSourceGenerator.random_sources
    #   source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}

    # end

    # articles = get_articles_from_domains(source_domains)

    # @full_articles = run_parser(articles)

    ###### PRODUCTION END ######

    ###### TESTING ######
    @full_articles = Article.order("RANDOM()")[0...2].map do |article|
      article.attributes.merge({"sourceName" => article.source.name})
      # !!Note Source Name camel case because it's going to JS
    end
    ###### TESTING  END ######

    # If the parser breaks it will return back nil so
    # we need to remove those before sending the data back
    render json: @full_articles.compact

  end

  private

  # TODO: Put `get_articles_from_domains` and `run_parser` in a separate file as a service object

  def get_articles_from_domains(sources_hash)

    # OPTIMIZE change `each` to map, and you can just use the return values instead of storing/returning an array --Tom
    articles = []

    sources_hash.each do |domain, num_of_articles|
      case domain
      when "mises.org"
        Mises.get_articles(num_of_articles, params[:search_term]).each do |article_url|
          articles << {url: article_url, source_id: 6}
        end
      else
        GoogleNews.get_articles(num_of_articles, params[:search_term], domain).each do |article_url|
          articles << {url: article_url, source_id: Source.find_by(domain: domain).id}
        end
      end
    end

    articles

  end

  def run_parser(articles)

    articles.map do |url_and_source|
      article = Article.find_by(url: url_and_source[:url])
      if article.nil?
        parser = ArticleParser.get_article_html(url_and_source[:url])
        next if parser == "Article not found"
        parser.assign_attributes(url_and_source)
        parser.save
        article = parser
      end

      article.attributes.merge({"sourceName" => article.source.name})

    end

  end

end
