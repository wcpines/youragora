class ArticleParser

  def self.get_article_html(url)
    client = MercuryParser::Client.new(api_key: Rails.application.secrets[:mercury_api_key])
    html = client.parse(url)

    article_hash = {
      title: html.title,
      author: html.author, #.split[0...2].join(" "),
      content: html.content,
      word_count: html.word_count
    }

  end 

end


