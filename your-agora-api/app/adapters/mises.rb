require 'nokogiri'
require 'open-uri'

class Mises

  def self.get_articles(search_term)

    formatted_search = search_term.split(" ").join("%20")

    divs = Nokogiri::HTML(open("https://mises.org/search/site/#{formatted_search}/library/mises-daily-articles-147"), 'html')
    publications = divs.css('.group-right')
    correct_publications = publications.select {|publication| publication.at_css('.search-label').text != "Audio/Video" }

    # Only grabs the top three links with [0...3]
    formatted_links = correct_publications[0...3].map do |publication|
      mises_url = publication.children[1].children[0].attributes["href"].value
      if mises_url[0] == '/'
        mises_url = 'https://mises.org' + mises_url
      end
      mises_url
    end

    # This is to show what the return value is. We don't need to explicity state it here cause Ruby is awesome
    # JK: Yes, but this should automatically be the return value of the fn, if you are using map.
    formatted_links
    #     

  end



end
