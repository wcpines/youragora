import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import Header from './Header'
import SearchBar from './articles/SearchBar'
import fetchUserId from '../actions/fetchUserId'


class App extends Component {

  componentWillMount(){
    if (this.props.currentUser === null && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
    }
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div id="article-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser.userId}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
