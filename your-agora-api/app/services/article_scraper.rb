class ArticleParser


  # Using the domain in weighted source hash, plus user's search terms, search google or the publication
  # and grab the resulting URLs on the page up to the ammount specified in the source hash

  def get_article_urls(sources_hash)

    articles = sources_hash.map do |domain, num_of_articles|

      case domain
      when "mises.org"
        Mises.get_articles(num_of_articles, params[:search_term]).each do |article_url|
          {url: article_url, source_id: 6}
        end
      else
        GoogleNews.get_articles(num_of_articles, params[:search_term], domain).each do |article_url|
          {url: article_url, source_id: Source.find_by(domain: domain).id}
        end
      end
    end

  end

  # Using article URLs, check to see if it exists in the database.
  # If it does not, run the parser, and assign to it everything you get
  # from the parser, plus the source ID and the URL (which you got above)

  # Additionally, create an association between the article and the search terms
  # using the ArticleSearch join table.  (If the article exists already, it will add
  # a new set of search terms)

  def create_search_term
    SearchTerm.create(name: params[:search_term])
  end

  def run_parser

    search_term = create_search_term
    articles = get_article_urls

    articles.map do |url_and_source|
      binding.pry
      article = Article.find_by(url: url_and_source[:url])
      if article.nil?
        parsed_article = ArticleParser.get_article_html(url_and_source[:url])
        next if parsed_article == "Article not found"
        parsed_article.assign_attributes(url_and_source)
        parsed_article.save
        article = parsed_article
      end

      ArticleSearch.create(article_id: article.id, search_term_id: search_term.id)

      article.attributes.merge({"sourceName" => article.source.name})

    end

  end

end


=begin
Assuming user exits:

1. Get their weighted source hash
2. Using that hash, get a set of article URLs
3. For each of those articles:
  a) If it's in the database

=end
