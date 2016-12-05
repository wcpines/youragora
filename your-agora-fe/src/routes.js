import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import MainTeaser from './components/MainTeaser'
import MainArticle from './components/MainArticle'
import ShowSource from './components/ShowSource'
import Source from './components/Source'


export default (
  <Route path="/" component={App} >
    <Route path="mainteaser" component={MainTeaser} />
    <Route path="mainarticle" component={MainArticle} >
    	<Route path="showSource" component={ShowSource} >
        <Route path="source" component={Source} />
      </Route>
    </Route>
  </Route>
);
