require 'nokogiri'
require 'open-uri'
require 'uri'

class GoogleNews

  def self.get_articles(num_of_articles, search_term, domain)
    news = Nokogiri::HTML(open("https://www.google.com/search?q=#{search_term}+#{domain}&tbm=nws"), 'html')
    publications = news.css('.g') # each article displayed by GN
    correct_publications = publications.select { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value =~ (/#{domain}/) }  # make sure the href contains the publication name
    formatted_links = correct_publications.map { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value.split(/(http.*)/)[1].split('&')[0]} # get just the URI
    formatted_links[0...num_of_articles].map { |link| URI.decode(link) }  # handle cases where URIs are returned encoded.
  end

end
