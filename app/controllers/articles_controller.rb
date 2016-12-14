class ArticlesController < ApplicationController

  skip_before_action :authenticate_user

  def fetch_first_article


    ###### PRODUCTION ######

    search_term = SearchTerm.find_by(name: params[:search_term])
    search_term.search_count += 1
    search_term.save

    # source_domains_hash = {
    #   Source.where("leaning = 'prog_lean'").order("RANDOM()").limit(1)[0].domain => 1,
    #   Source.where("leaning = 'cons_lean'").order("RANDOM()").limit(1)[0].domain => 1,
    #   Source.where("leaning = 'libr_lean'").order("RANDOM()").limit(1)[0].domain => 1
    # }


    # @full_articles = ArticleScraper.new.run_parser(source_domains_hash, search_term)

    ###### PRODUCTION END ######

    # ###### TESTING ######
    @full_articles = Article.order("RANDOM()")[0...2].map do |article|
      article.attributes.merge({"sourceName" => article.source.name})
      # !!Note Source Name camel case because it's going to JS
    end
    # ###### TESTING  END ######

    # If the parser breaks it will return back nil so
    # we need to remove those before sending the data back

    render json: @full_articles.compact

  end

  def create

    ###### PRODUCTION ######

    search_term = SearchTerm.find_by(name: params[:search_term])

    # unless params[:current_user_id].nil?

    #   @user = User.find params[:current_user_id]
    #   sources = WeightedSourceGenerator.new(@user).get_weighted_sources
    #   # => [ full of source objects ]
    #   source_domains_hash = sources.reduce(Hash.new(0)) do |source_domain, quantity|
    #     source_domain[quantity] += 1
    #     source_domain
    #   end
    #   # => {mises.org: 2, huffingtonpost.com: 3, ...}
    # else

    #   sources = RandomSourceGenerator.random_sources
    #   source_domains_hash = sources.reduce(Hash.new(0)) do |source_domain, quantity|
    #     source_domain[quantity] += 1
    #     source_domain
    #   end
    # end

    # # NOTE to self: This is where you'll pull in service object. -- CP
    # articles = get_articles_from_domains(source_domains_hash)

    # @full_articles = ArticleScraper.new.run_parser(source_domains_hash, search_term)
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
end
