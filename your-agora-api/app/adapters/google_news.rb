require 'nokogiri'
require 'open-uri'

class GoogleNews

  def self.get_articles(search_term, publication, domain)
    news = Nokogiri::HTML(open("https://www.google.com/search?q=#{search_term}+#{publication}&tbm=nws"), 'html')
    publications = news.css('.g')
    correct_publications = publications.select { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value =~ (/#{domain}/) }
    formatted_links = correct_publications.map { |publication| publication.css('.r').children.map(&:attributes)[0]["href"].value.split(/(http.*)/)[1].split('&')[0]}
    formatted_links[0...3]
  end

end
