import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import MainTeaser from './components/MainTeaser'
import MainArticle from './components/MainArticle'
import ShowSource from './components/ShowSource'


export default (
  <Route path="/" component={App} >
    <Route path="mainteaser" component={MainTeaser} />
    <Route path="mainarticle" component={MainArticle} >
    	<Route path="mainarticle/showSource" component={ShowSource} />
    </Route>
  </Route>
);
