class ArticleParser

  def self.get_article_html(url)
    # url = 'https://mises.org/library/free-markets-property-rights-and-climate-change-how-privatize-climate-policy'
    client = MercuryParser::Client.new(api_key: Rails.application.secrets[:mercury_api_key])
    html = client.parse(url)

    if html.author
      author = html.author.split[0...2].join(" ")
    else
      author = "No Author Found"
    end

    # add lead image url
    article_hash = {
      title: html.title,
      author: author,
      content: html.content,
      word_count: html.word_count,
      img_url: html.lead_image_url
    }

  end

end
