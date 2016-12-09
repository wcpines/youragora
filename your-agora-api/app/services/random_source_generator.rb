class RandomSourceGenerator

  DESIRED_ARTICLE_COUNT = 20

  # def initialize(users_lean)
  #   @users_lean = users_lean
  # end

  def self.random_sources

    Source.order("RANDOM()")[0...DESIRED_ARTICLE_COUNT].pluck(:domain)

  end

end
