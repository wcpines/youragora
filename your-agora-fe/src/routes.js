import React from 'react';
import { Route } from 'react-router';
import HomePage from './components/HomePage'
import App from './components/App';
import SignIn from './components/users/SignIn'
import SignUp from './components/users/SignUp'
import Profile from './components/users/Profile'
import MainTeaser from './components/articles/MainTeaser'
import MainArticle from './components/articles/MainArticle'
import ShowSource from './components/reactions/ShowSource'
import Source from './components/reactions/Source'
import StashIndex from './components/StashIndex'
import NotFound from './components/NotFound'


export default (
  <Route>
    <Route path="/" component={HomePage} />
    <Route path="/users/:id" component={Profile} />
    <Route component={App} >
      <Route path="/stashes" component={StashIndex} />
      <Route path="/articles/:id/teaser" component={MainTeaser} />
      <Route path="/articles/:id/main" component={MainArticle} >
        <Route path="/articles/:id/main/showSource" component={ShowSource} />
        <Route path="/articles/:id/main/source" component={Source} />
      </Route>
    </Route>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path='*' component={NotFound} />
  </Route>
);
