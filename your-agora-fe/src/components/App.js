import React, { Component } from 'react'
import MainArticle from './MainArticle'
import SearchBar from './SearchBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
