
sources = [
  {name: 'The American Conservative', domain: 'theamericanconservative.com', leaning: 'cons_lean'},
  {name: 'The Imaginative Conservative', domain: 'theimaginativeconservative.org', leaning: 'cons_lean'},
  {name: 'American Spectator', domain: 'spectator.org', leaning: 'cons_lean'},
  {name: 'American Thinker', domain: 'americanthinker.com', leaning: 'cons_lean'},
  {name: 'Front Porch Republic', domain: 'frontporchrepublic.com', leaning: 'cons_lean'},
  {name: 'National Review', domain: 'nationalreview.com', leaning: 'cons_lean'},
  {name: 'First Things', domain: 'firstthings.com', leaning: 'cons_lean'},
  {name: 'American Enterprise Institute (AEI)', domain: 'aei.org', leaning: 'cons_lean'},
  {name: 'The Heritage Foundation', domain: 'heritage.org', leaning: 'cons_lean'},
  {name: 'Hoover Institution', domain: 'hoover.org', leaning: 'cons_lean'},
  {name: 'Independent Institute', domain: 'independent.org', leaning: 'libr_lean'},
  {name: 'Reason', domain: 'reason.com', leaning: 'libr_lean'},
  {name: 'Mises Institute', domain: 'mises.org', leaning: 'libr_lean'},
  {name: 'Cato Institute', domain: 'cato.org', leaning: 'libr_lean'},
  {name: 'Electronic Frontier Foundation (EFF)', domain: 'eff.org', leaning: 'libr_lean'},
  {name: 'Slate', domain: 'slate.com', leaning: 'prog_lean'},
  {name: 'NPR', domain: 'npr.org', leaning: 'prog_lean'},
  {name: 'Brookings Institute', domain: 'brookings.edu', leaning: 'prog_lean'},
  {name: 'Jacobin', domain: 'jacobinmag.com', leaning: 'prog_lean'},
  {name: 'The Huffington Post', domain: 'huffingtonpost.com', leaning: 'prog_lean'},
  {name: 'The Atlantic', domain: 'theatlantic.com', leaning: 'prog_lean'},
  {name: 'Policy Mic', domain: 'mic.com/policy', leaning: 'prog_lean'},
  {name: 'Vox', domain: 'vox.com', leaning: 'prog_lean'},
  {name: 'Mother Jones', domain: 'motherjones.com', leaning: 'prog_lean'},
  {name: 'Center for American Progress', domain: 'americanprogress.org', leaning: 'prog_lean'},
  {name: 'Guttmacher Institute', domain: 'guttmacher.org', leaning: 'prog_lean'},
  {name: 'Urban Institute', domain: 'urban.org', leaning: 'prog_lean'},
  {name: 'Vanity Fair', domain: 'vanityfair.com', leaning: 'prog_lean'},
  {name: 'Economic Policy Institute (EPI)', domain: 'epi.org', leaning: 'prog_lean'},
  {name: 'The Progressive', domain: 'progressive.org', leaning: 'prog_lean'},
  {name: 'The American Prospect', domain: 'prospect.org', leaning: 'prog_lean'}
]


sources.map do |source|
  Source.create(name: source[:name], domain: source[:domain], leaning: source[:leaning])
end
