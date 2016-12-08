import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './articles/SearchBar'
import fetchUserId from '../actions/fetchUserId'
import fetchArticles from '../actions/fetchArticles'
import fetchStashes from '../actions/fetchStashes'



class App extends Component {

  componentWillMount(){
    if (this.props.userId === null && localStorage.getItem('jwt') != null){
    }
  }

  render() {
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
  return {
    userId: state.currentUser.userId,
    mainArticle: state.mainArticle
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId, fetchStashes, fetchArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
