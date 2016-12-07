import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import SearchBar from './articles/SearchBar'
import fetchUserId from '../actions/fetchUserId'
import fetchArticles from '../actions/fetchArticles'


class App extends Component {

  componentWillMount(){
    if (this.props.currentUser === null && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
    }
  }

  // componentDidMount(){
  //   if(this.props.mainArticle.article.content === ""){
  //     this.props.fetchArticles('')
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="article-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser.userId,
    mainArticle: state.mainArticle
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId, fetchArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
