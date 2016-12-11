import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './articles/SearchBar'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'




// if (this.props.router.location.pathname !== ("/stashes" || "/users/:id") &&
//     this.props.article.id === undefined)

// TBD: Better than nested `if` ^

class App extends Component {

  render() {
    if(this.props.router.location.pathname !== ("/stashes" || "/users/:id")){
      if(this.props.article.id === undefined){
        browserHistory.push('/')
        location.reload()}
    }
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div id="article-container" >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {article: state.mainArticle}
}

export default connect(mapStateToProps)(App)
