# NOTE:  3 = cons, 2 = libr, 1 = prog

sources = [
  {name: 'The American Conservative', domain: 'theamericanconservative.com', leaning: '3'},
  {name: 'The Imaginative Conservative', domain: 'theimaginativeconservative.org', leaning: '3'},
  {name: 'American Spectator', domain: 'spectator.org', leaning: '3'},
  {name: 'American Thinker', domain: 'americanthinker.com', leaning: '3'},
  {name: 'Front Porch Republic', domain: 'frontporchrepublic.com', leaning: '3'},
  {name: 'National Review', domain: 'nationalreview.com', leaning: '3'},
  {name: 'First Things', domain: 'firstthings.com', leaning: '3'},
  {name: 'American Enterprise Institute (AEI)', domain: 'aei.org', leaning: '3'},
  {name: 'The Heritage Foundation', domain: 'heritage.org', leaning: '3'},
  {name: 'Hoover Institution', domain: 'hoover.org', leaning: '3'},
  {name: 'Independent Institute', domain: 'independent.org', leaning: '2'},
  {name: 'Reason', domain: 'reason.com', leaning: '2'},
  {name: 'Mises Institute', domain: 'mises.org', leaning: '2'},
  {name: 'Cato Institute', domain: 'cato.org', leaning: '2'},
  {name: 'Electronic Frontier Foundation (EFF)', domain: 'eff.org', leaning: '2'},
  {name: 'Slate', domain: 'slate.com', leaning: '1'},
  {name: 'NPR', domain: 'npr.org', leaning: '1'},
  {name: 'Brookings Institute', domain: 'brookings.edu', leaning: '1'},
  {name: 'Jacobin', domain: 'jacobinmag.com', leaning: '1'},
  {name: 'The Huffington Post', domain: 'huffingtonpost.com', leaning: '1'},
  {name: 'The Atlantic', domain: 'theatlantic.com', leaning: '1'},
  {name: 'Policy Mic', domain: 'mic.com/policy', leaning: '1'},
  {name: 'Vox', domain: 'vox.com', leaning: '1'},
  {name: 'Mother Jones', domain: 'motherjones.com', leaning: '1'},
  {name: 'Center for American Progress', domain: 'americanprogress.org', leaning: '1'},
  {name: 'Guttmacher Institute', domain: 'guttmacher.org', leaning: '1'},
  {name: 'Urban Institute', domain: 'urban.org', leaning: '1'},
  {name: 'Vanity Fair', domain: 'vanityfair.com', leaning: '1'},
  {name: 'Economic Policy Institute (EPI)', domain: 'epi.org', leaning: '1'},
  {name: 'The Progressive', domain: 'progressive.org', leaning: '1'},
  {name: 'The American Prospect', domain: 'prospect.org', leaning: '1'}
]


sources.map do |source|
  Source.create(name: source[:name], domain: source[:domain], leaning: source[:leaning])
end
