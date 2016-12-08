class RandomSourceGenerator

  # def initialize(users_lean)
  #   @users_lean = users_lean
  # end

  def random_sources

    Source.order("RANDOM()")[0...4]

  end

  def get_percent_dec(num, total)
    num.to_f / total
  end


  # //
  # Given: 
  # r_lean: 2,
  # l_lean: 6,
  # a_lean: 1
  # //  

  # total lean points 
  total = (@user.r_lean + @user.l_lean + @user.a_lean) 

  #=> 9

  # each lean score as percent of total points.  NOTE: Rounding may cause exceeding 100%.  May want to use largest remainder method
  initial_percent_dec = [@user.r_lean, @user.l_lean, @user.a_lean].map { |lean| get_percent_dec(lean, total).round(3) } 

  #=> [22, 67, 11]

  # set of weights found as inverse %  

  inverse_weights = initial_percent_dec.map { |p| 100 - p } 
  # => [78, 33, 89]

  new_total = inverse_weights.inject(:+)

  # new weight set found by taking inverse weights and finding each as percent of total
  final_weights = inverse_weights.map { |weight| get_percent_dec(weight, new_total) } 

  # => [39.0, 16.5, 44.5] ***  39% of next articles should be from R sources, 16.5% from L sources, 44.5% from A


end


def getSources(weights)

end
=begin RD comments


I need a fixed number of articles coming back because I need there to be an exact % distribution of source leanings.  We can then shuffle each set of articles before they are returned to the user.

Get fixed number, so fetch 20 articles.   

For each new weight R 39.0, L 16.5, A 44.5, generate a list of sources for that percent.  So if I need 20 articles, then the sources I get those articles from should be:

:





