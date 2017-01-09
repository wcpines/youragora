class WeightedSourceGenerator

  DESIRED_ARTICLE_COUNT = 10

  attr_accessor :user

  def initialize(user)
    self.user = user
  end

  def get_weighted_sources

    weights = get_source_weights(user)

    source_distribution = weights.map do |label, weight|
      [label.to_sym, (weight * DESIRED_ARTICLE_COUNT).ceil]
    end.to_h

    sources_list = []

    source_distribution.each do |label,source_quant|
      counter = 0
      Source.order("RANDOM()").where(leaning: label).pluck(:domain).cycle do |source|
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

    user_leaning = {prog_lean: @user.prog_lean, libr_lean: @user.libr_lean, cons_lean: @user.cons_lean}

    total = (user.cons_lean + user.prog_lean + user.libr_lean)

    initial_weights = user_leaning.map do |label,current_lean|
      [label.to_sym, get_percent_dec(current_lean, total).round(4)]
    end.to_h

    inverse_weights = initial_weights.map do |label, weight|
      [label.to_sym, ((1 - weight).round(4) / 2)] # rounding to deal with subtracting irrational numbers
    end.to_h

  end

end
