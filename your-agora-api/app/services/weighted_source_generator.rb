class WeightedSourceGenerator

  DESIRED_ARTICLE_COUNT = 20

  attr_accessor :user

  def initialize(user)
    self.user = user
  end

  def get_weighted_sources

    # Using `ceil` means that there will be a few more sources
    # returned from which to fetch articles URLs than originally input

    weights = get_source_weights(user)
    # => {:r_lean=>0.3889, :l_lean=>0.16665, :a_lean=>0.44445}


    source_distribution = weights.map do |label, weight| 
      [label.to_sym, (weight * DESIRED_ARTICLE_COUNT).ceil]
    end.to_h

    # => {:r_lean=>39, :l_lean=>17, :a_lean=>45}

    sources_list = []
    source_lean = 1

    source_distribution.each do |label,source_quant|
      case label
      when :r_lean
        source_lean = 3
      when :l_lean
        source_lean = 1
      when :a_lean
        source_lean = 2
      end

      counter = 0

      Source.order("RANDOM()").where("leaning = #{source_lean}").cycle do |source|
        sources_list << source
        break if counter == source_quant
        counter += 1
      end 
    end
    sources_list
  end

  private

  def get_percent_dec(num, total)
    num.to_f / total
  end

  def get_source_weights(user)

    # user.r_lean: 2
    # user.l_lean: 6
    # user.a_lean: 1

    # OPTIMIZE mapping over the hashes and converting to a nested array then back to hash is a bit slower than each_with_object 


    # Lean scores as percent of total points.
    user_leaning = {r_lean: user.r_lean, l_lean: user.l_lean, a_lean: user.a_lean}
    # => {:r_lean=>2, :l_lean=>6, :a_lean=>1}

    # total lean 'points' on the user
    total = (user.r_lean + user.l_lean + user.a_lean)
    # => 9


    initial_weights = user_leaning.map do |label,current_lean| 
      [label.to_sym, get_percent_dec(current_lean, total).round(4)] 
    end.to_h
    # => {:r_lean=>0.2222, :l_lean=>0.6667, :a_lean=>0.1111}

    # set of weights found as inverse current weight  div by 2 (to make within 100%)
    inverse_weights = initial_weights.map do |label, weight| 
      [label.to_sym, ((1 - weight).round(4) / 2)] # rounding to deal with subtracting irrational numbers
    end.to_h  
    # => {:r_lean=>0.3889, :l_lean=>0.16665, :a_lean=>0.44445} 

  end

end
