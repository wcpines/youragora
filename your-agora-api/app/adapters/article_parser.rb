class ArticleParser

  def self.get_article_html(url)
    url = "https://www.aei.org/publication/why-we-need-the-electoral-college"
    # url = "http://mises.org"

    client = MercuryParser::Client.new(api_key: Rails.application.secrets[:mercury_api_key])

    # PRETTY DOPE
    # When Mercury Parser barfs on url ignore error and return nil
    html = suppress(Exception) do
      client.parse(url)
    end

    unless html.nil?

      if html.author
        author = html.author.split[0...2].join(" ")
      else
        author = "No Author Found"
      end

      # add lead image url
      article_attributes_hash = {
        title: html.title,
        author: author,
        content: html.content,
        word_count: html.word_count,
        img_url: html.lead_image_url
      }

      Article.new(article_attributes_hash)
    else
      Article.new(title: "Article Not Found", author: "Mr. Dino", content: "<p>Error</p>", word_count: 1, img_url: "https://cdn.drawception.com/images/panels/2015/3-22/6DCA2LqgT1-6.png")
    end

  end

end
