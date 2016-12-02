require 'nokogiri'
require 'open-uri'

search_term = "trigger warnings"
source = "american thinker"
domain = "americanthinker.com"

news = Nokogiri::HTML(open("https://www.google.com/search?q=#{search_term}+#{source}&tbm=nws"), 'html') 
sources = news.css('.g')
correct_sources = sources.select { |source| source.css('.r').children.map(&:attributes)[0]["href"].value =~ (/#{domain}/) }
formatted_links = correct_sources.map { |source| source.css('.r').children.map(&:attributes)[0]["href"].value.split('://')[1].split('&')[0]} 

puts formatted_links
