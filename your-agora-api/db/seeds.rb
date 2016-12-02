# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Source.create(name: 'The New York Times', domain: 'nytimes.com')
Source.create(name: 'Jacobin', domain: 'jacobinmag.com')
Source.create(name: 'The Nation', domain: 'thenation.com')

Source.create(name: 'Fox News', domain: 'foxnews.com')
Source.create(name: 'American Conservative', domain: 'theamericanconservative.com')
Source.create(name: 'Mises', domain: 'mises.org')
