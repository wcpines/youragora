class ArticleParser

  def self.get_article_html(url)

    client = MercuryParser::Client.new(api_key: ENV['mercury_api_key'])

    html = suppress(Exception) do
      article = client.parse(url)
      if article.word_count
        article
      end
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
