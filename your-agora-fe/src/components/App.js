import React, { Component } from 'react'
import MainArticle from './MainArticle'
import Search from './Search'
import Form from './Form'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <MainArticle />
        <Form />
        <Users />
      </div>
    );
  }
}

export default App;
