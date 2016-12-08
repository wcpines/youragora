class RandomSourceGenerator

  # def initialize(users_lean)
  #   @users_lean = users_lean
  # end

  def random_sources

    Source.order("RANDOM()")[0...4]

  end

end
