class ArticleScraper


  # Using the domain in weighted source hash, plus user's search terms, search google or the publication
  # and grab the resulting URLs on the page up to the ammount specified in the source hash

  def get_article_urls(source_domains_hash, search_term)

    articles = []
    source_domains_hash.each do |domain, num_of_articles|

      case domain
      when "mises.org"
        Mises.get_articles(num_of_articles, search_term.name).each do |article_url|
          articles << {url: article_url, source_id: 6}
        end
      else
        GoogleNews.get_articles(num_of_articles, search_term.name, domain).each do |article_url|
          articles << {url: article_url, source_id: Source.find_by(domain: domain).id}
        end
      end

    end
    articles

  end

  def find_or_parse_articles(articles, search_term)
    articles.map do |url_and_source|
      article = Article.find_by(url: url_and_source[:url])
      if article.nil?
        parsed_article = ArticleParser.get_article_html(url_and_source[:url])
        next if parsed_article == "Article not found"
        parsed_article.assign_attributes(url_and_source)
        parsed_article.save
        article = parsed_article
      end

      ArticleSearch.find_or_create_by(article_id: article.id, search_term_id: search_term.id)

      article.attributes.merge({"sourceName" => article.source.name})

    end
  end


  # Using article URLs, check to see if it exists in the database.
  # If it does not, run the parser, and assign to it everything you get
  # from the parser, plus the source ID and the URL (which you got above)

  # Additionally, create an association between the article and the search terms
  # using the ArticleSearch join table.  (If the article exists already, it will add
  # a new set of search terms)

  def run_parser(source_domains_hash, search_term)

    articles = get_article_urls(source_domains_hash, search_term)

    find_or_parse_articles(articles, search_term)

  end

end
