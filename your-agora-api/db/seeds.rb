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


# TODO: Finish
=begin

sources = [
  {name: "The American Conservative", domain: 'theamericanconservative.com', leaning: 1},
  {name: 'The Imaginative Conservative', domain: 'theimaginativeconservative.org', leaning: 1},
  {name: 'American Spectator', domain: 'spectator.org/', leaning: 1},
  {name: 'American Thinker', domain: 'americanthinker.com', leaning: 1},
  {name: 'Front Porch Republic', domain: 'frontporchrepublic.com', leaning: 1},
  {name: 'National Review', domain: 'nationalreview.com', leaning: 1},
{name: 'First Things', domain: 'firstthings.com', leaning: 1},
]




name: 'American Enterprise Institute (AEI)'
name: 'Manhattan Institute'
name: 'Hoover Institution'
name: 'Independent Institute'
name: 'Reason'
name: 'Mises Institute'
name: 'Cato Institute'
name: 'Electronic Frontier Foundation (EFF)'
name: 'Slate'
name: 'NPR'
name: 'Jacobin'
name: 'The Huffington Post'
name: 'The Atlantic'
name: 'Policy Mic'
name: 'Vox'
name: 'Mother Jones'
name: 'Center for American Progress'
name: 'Guttmacher Institute'
name: 'Urban Institute'
name: 'Vanity Fair'
name: 'Economic Policy Institute (EPI)'
name: 'The Progressive'
name: 'The American Prospect'
=end
