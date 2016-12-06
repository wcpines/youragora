import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import MainTeaser from './components/MainTeaser'
import MainArticle from './components/MainArticle'
import ShowSource from './components/ShowSource'
import Source from './components/Source'


export default (
  <Route path="/" component={App} >
    <Route path="/articles/:id/teaser" component={MainTeaser} />
    <Route path="/articles/:id/main" component={MainArticle} >
      <Route path="/articles/:id/main/showSource" component={ShowSource} />
      <Route path="/articles/:id/main/source" component={Source} />
    </Route>
  </Route>
);
