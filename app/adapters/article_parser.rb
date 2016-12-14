class ArticleParser

  def self.get_article_html(url)
    # url = "https://www.aei.org/publication/why-we-need-the-electoral-college" # NOTE: Bad link for testing 12/8/2016

    client = MercuryParser::Client.new(api_key: ENV['mercury_api_key'])

    # PRETTY DOPE
    # When Mercury Parser barfs on url ignore error and return nil
    html = suppress(Exception) do
      client.parse(url)
    end

    unless html.nil? || html.word_count < 10

      if html.author
        author = html.author.split[0...2].join(" ")
      else
        author = "No Author Found"
      end

      article_attributes_hash = {
        title: html.title,
        author: author,
        content: html.content,
        word_count: html.word_count,
        img_url: html.lead_image_url
      }

      Article.new(article_attributes_hash)
    else
      "Article not found"
    end

  end

end
