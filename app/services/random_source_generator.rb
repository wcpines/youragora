class RandomSourceGenerator

  DESIRED_ARTICLE_COUNT = 10

  def self.random_sources
    Source.order("RANDOM()")[0...DESIRED_ARTICLE_COUNT].pluck(:domain)
  end

end
