##About

YourAgora started as a response to the current political climate in the U.S. The country has become increasingly polarized, and social media appears to have had the unfortunate effect of creating opinion silos, as algorithms designed to deliver relevant content surface more and more of what a person identifies with.

The resulting echo chambers amplify opinions and reinforce some positions, while others go unconsidered in their scarcity. Still others are seen as absurd, or worse. It's now all too easy to become divided, and to lack mutual understanding. We believe that opening up a market of ideas, where people can engage with some of the best arguments available, is a good first step to correcting this. We hope this project, or something like it, would yield a more widely read, and therefore more empathetic population.

Happy reading.

##How it works

We currently use a set [source list](https://github.com/wcpines/youragora/blob/master/your-agora-api/db/seeds.rb)*, with each source coursely bucketed into conservative, progressive, or libertarian leanings.  As a user votes ('reacts') on an article, we use the source's corresponding lean to increment or decrement that user's overal lean preferences. The next set of articles fetched will be inversely proportional to those preferences.  

**If you'd like to suggest source additions, feel free to open an issue or pull request!*

##Technologies and frameworks

- React/Redux
- Ruby on Rails API + postgresql
- Nokogiri
- Mercury Web Parser [API](https://github.com/wcpines/youragora/blob/master/your-agora-api/db/seeds.rb)
- Skeleton [CSS](http://getskeleton.com/)
- JSON Web Tokens
