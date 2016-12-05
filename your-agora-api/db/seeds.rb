sources = [
  {name: 'The American Conservative', domain: 'theamericanconservative.com', leaning: 'R'},
  {name: 'The Imaginative Conservative', domain: 'theimaginativeconservative.org', leaning: 'R'},
  {name: 'American Spectator', domain: 'spectator.org', leaning: 'R'},
  {name: 'American Thinker', domain: 'americanthinker.com', leaning: 'R'},
  {name: 'Front Porch Republic', domain: 'frontporchrepublic.com', leaning: 'R'},
  {name: 'National Review', domain: 'nationalreview.com', leaning: 'R'},
  {name: 'First Things', domain: 'firstthings.com', leaning: 'R'},
  {name: 'American Enterprise Institute (AEI)', domain: 'aei.org', leaning: 'R'},
  {name: 'The Heritage Foundation', domain: 'heritage.org', leaning: 'R'}, 
  {name: 'Hoover Institution', domain: 'hoover.org', leaning: 'R'},
  {name: 'Independent Institute', domain: 'independent.org', leaning: 'A'},
  {name: 'Reason', domain: 'reason.com', leaning: 'A'},
  {name: 'Mises Institute', domain: 'mises.org', leaning: 'A'},
  {name: 'Cato Institute', domain: 'cato.org', leaning: 'A'},
  {name: 'Electronic Frontier Foundation (EFF)', domain: 'eff.org', leaning: 'A'},
  {name: 'Slate', domain: 'slate.com', leaning: 'L'},
  {name: 'NPR', domain: 'npr.org', leaning: 'L'},
  {name: 'Brookings Institute', domain: 'brookings.edu', leaning: 'L'}, 
  {name: 'Jacobin', domain: 'jacobinmag.com', leaning: 'L'},
  {name: 'The Huffington Post', domain: 'huffingtonpost.com', leaning: 'L'},
  {name: 'The Atlantic', domain: 'theatlantic.com', leaning: 'L'},
  {name: 'Policy Mic', domain: 'mic.com/policy', leaning: 'L'},
  {name: 'Vox', domain: 'vox.com', leaning: 'L'},
  {name: 'Mother Jones', domain: 'motherjones.com', leaning: 'L'},
  {name: 'Center for American Progress', domain: 'americanprogress.org', leaning: 'L'},
  {name: 'Guttmacher Institute', domain: 'guttmacher.org', leaning: 'L'},
  {name: 'Urban Institute', domain: 'urban.org', leaning: 'L'},
  {name: 'Vanity Fair', domain: 'vanityfair.com', leaning: 'L'},
  {name: 'Economic Policy Institute (EPI)', domain: 'epi.org', leaning: 'L'},
  {name: 'The Progressive', domain: 'progressive.org', leaning: 'L'},
  {name: 'The American Prospect', domain: 'prospect.org', leaning: 'L'},
]


sources.map do |source|
  Source.create(name: source[:name], domain: source[:domain], leaning: source[:leaning])
end
