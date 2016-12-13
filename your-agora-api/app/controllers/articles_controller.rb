class ArticlesController < ApplicationController

  skip_before_action :authenticate_user

  def fetch_first_article


    ###### PRODUCTION ######
    source_domains = {Source.where("leaning = 'prog_lean'").order("RANDOM()").limit(1)[0].domain => 1,
      Source.where("leaning = 'cons_lean'").order("RANDOM()").limit(1)[0].domain => 1,
      Source.where("leaning = 'libr_lean'").order("RANDOM()").limit(1)[0].domain => 1}

    articles = get_articles_from_domains(source_domains)

    @full_articles = run_parser(articles)
    ###### PRODUCTION END ######

    # ###### TESTING ######
    # @full_articles = Article.order("RANDOM()")[0...2].map do |article|
    #   article.attributes.merge({"sourceName" => article.source.name})
    #   # !!Note Source Name camel case because it's going to JS
    # end
    # ###### TESTING  END ######

    # If the parser breaks it will return back nil so
    # we need to remove those before sending the data back
    render json: @full_articles.compact

  end

  def create

    ###### PRODUCTION ######
    unless params[:current_user_id].nil?

      @user = User.find params[:current_user_id]
      sources = WeightedSourceGenerator.new(@user).get_weighted_sources
      # => [ full of source objects ]
      source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}
      # => {mises.org: 2, huffingtonpost.com: 3, ...}
    else

      sources = RandomSourceGenerator.random_sources
      source_domains = sources.reduce(Hash.new(0)) {|source_domain, quantity| source_domain[quantity] += 1; source_domain}

    end

    # NOTE to self: This is where you'll pull in service object. -- CP
    articles = get_articles_from_domains(source_domains)

    @full_articles = run_parser(articles)

    ###### PRODUCTION END ######

    # ###### TESTING ######
    # @full_articles = Article.order("RANDOM()")[0...2].map do |article|
    #   article.attributes.merge({"sourceName" => article.source.name})
    #   # !!Note Source Name camel case because it's going to JS
    # end
    # ###### TESTING  END ######

    # If the parser breaks it will return back nil so
    # we need to remove those before sending the data back
    render json: @full_articles.compact

  end

end
