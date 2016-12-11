import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SearchBar from './articles/SearchBar'
import SignOut from './users/SignOut'
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
    var loggedIn;

    var href = `/users/${this.props.userId}`

    if (localStorage.jwt === undefined){
      loggedIn =
        <div className="sign-links-homepage">
          <Link id="sign-in-link" to="/signin" >Sign In</Link>
          <strong>|</strong>
          <Link id="sign-up-link" to="/signup" >Sign Up</Link>
        </div>
    } else {
      loggedIn = <div className="sign-links"> <span id="welcome-message"> Welcome back {this.props.userName}! </span> <br /> <SignOut /> <br />
        <button><Link id="StashIndex-link" to="/stashes" >See Stashed Articles</Link></button> <br />
        <button><Link id="Profile-link" to={href} >My Profile</Link></button>
      </div>
    }
    return (
      <div className="HomePage">
        {loggedIn}
        <div id="homepage-logo">
          <img role="presentation" src="/images/youragora-logo.png" />
        </div>
        <div id="search-bar-homepage-container">
          <SearchBar idProps={'search-bar-homepage'}/>
        </div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.currentUser.userName,
    userId: state.currentUser.userId
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId, fetchStashes, fetchReactions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
