require 'nokogiri'
require 'open-uri'
require 'uri'

KEY = Rails.application.secrets.google_api_key

class GoogleNews

  def get_articles(num_of_articles, search_term, domain)

    news = suppress(Exception) do
      Nokogiri::HTML(open("https://www.google.com/search?q=#{search_term}+#{domain}&tbm=nws"), 'html')
    end

    if news

      publications = news.css('.g') # each article displayed by GN
      correct_publications = publications.select { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value =~ (/#{domain}/) }  # make sure the href contains the publication name
      formatted_links = correct_publications.map { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value.split(/(http.*)/)[1].split('&')[0]} # get just the URI
      formatted_links[0...num_of_articles].map { |link| URI.decode(link) }  # handle cases where URIs are returned encoded.

    else

      formatted_search = search_term.split(" ").join("%20")
      results = JSON.parse(open("https://www.googleapis.com/customsearch/v1?q=#{formatted_search}&cx=007438961960256472316%3A4gdkpqmpbru&num=#{num_of_articles}&siteSearch=#{domain}&sort=date&key=#{KEY}").read)

      if results['items'].length == num_of_articles

        articles = results['items'].map do |result|
          result['link']
        end

      else
        articles = Article.joins(:search_terms).order(created_at: :desc).limit(num_of_articles).where("name = '#{search_term}'").pluck(:url)

        if articles.length == 0
          articles = Article.order("RANDOM()").limit(num_of_articles).pluck(:url)
        end

        articles
      end

    end

  end

end
