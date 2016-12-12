import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './articles/SearchBar'
import NavBar from './NavBar'
import fetchUserId from '../actions/fetchUserId'
import fetchStashes from '../actions/fetchStashes'
import fetchReactions from '../actions/fetchReactions'
import { bindActionCreators } from 'redux'


class HomePage extends Component{

  componentWillMount(){
    if(this.props.userId === null && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
      this.props.fetchStashes()
      this.props.fetchReactions() // TBD: do this just in Profile component instead?
    }
  }

  render(){
    return (
      <div className="HomePage">
        <NavBar />
        <div id="homepage-logo">
          <img role="presentation" src="/images/youragora-logo.png" />
        </div>
        <div id="search-bar-homepage-container">
          <SearchBar idProps={'search-bar-homepage'}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId, fetchStashes, fetchReactions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
