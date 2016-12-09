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
    # => {:cons_lean=>0.3889, :prog_lean=>0.16665, :libr_lean=>0.44445}


    source_distribution = weights.map do |label, weight|
      [label.to_sym, (weight * DESIRED_ARTICLE_COUNT).ceil]
    end.to_h

    # => {:cons_lean=>39, :prog_lean=>17, :libr_lean=>45}

    sources_list = []
    source_lean = 1

    source_distribution.each do |label,source_quant|
      case label
      when :prog_lean
        source_lean = 1
      when :libr_lean
        source_lean = 2
      when :cons_lean
        source_lean = 3
      end

      counter = 0

      Source.order("RANDOM()").where("leaning = #{source_lean}").pluck(:domain).cycle do |source|
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

    # user.cons_lean: 2
    # user.prog_lean: 6
    # user.libr_lean: 1

    # OPTIMIZE mapping over the hashes and converting to a nested array then back to hash is a bit slower than each_with_object

    # => [{"id"=>nil, "sum"=>2, "leaning"=>1}, {"id"=>nil, "sum"=>-1, "leaning"=>3}]


    # Lean scores as percent of total points.
    user_leaning = {prog_lean: @user.prog_lean, libr_lean: @user.libr_lean, cons_lean: @user.cons_lean}
    # => {:cons_lean=>2, :prog_lean=>6, :libr_lean=>1}

    # total lean 'points' on the user
    total = (user.cons_lean + user.prog_lean + user.libr_lean)
    # => 9


    initial_weights = user_leaning.map do |label,current_lean|
      [label.to_sym, get_percent_dec(current_lean, total).round(4)]
    end.to_h
    # => {:cons_lean=>0.2222, :prog_lean=>0.6667, :libr_lean=>0.1111}

    # set of weights found as inverse current weight  div by 2 (to make within 100%)
    inverse_weights = initial_weights.map do |label, weight|
      [label.to_sym, ((1 - weight).round(4) / 2)] # rounding to deal with subtracting irrational numbers
    end.to_h
    # => {:cons_lean=>0.3889, :prog_lean=>0.16665, :libr_lean=>0.44445}

  end

end
