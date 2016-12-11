import React, { Component } from 'react'
import {Link} from 'react-router'
// import SearchBar from './articles/SearchBar'
import SignOut from './users/SignOut'
import fetchUserId from '../actions/fetchUserId'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends Component {

  // About Us
    // Motivation/history of the ssite
    // three sections for each contributor
  // My Profile
  // My Stashed Articles

  render() {

    var loggedIn

    var href = `/users/${this.props.userId}`

    if (localStorage.jwt === undefined){
      loggedIn =
        <div className="sign-links">
          <Link id="sign-in-link" to="/signin" >Sign In</Link>
          <strong>|</strong>
          <Link id="sign-up-link" to="/signup" >Sign Up</Link>
        </div>
    } else {
      loggedIn = <div className="sign-links"> <span id="welcome-message"> Welcome back {this.props.userName}! </span> <br />
        <Link to="/" >Home</Link><br />
        <Link id="Profile-link" to={href} >My Profile</Link><br />
        <Link id="StashIndex-link" to="/stashes" >Stashed Articles</Link> <br />
        <SignOut />
      </div>
    }

    return (
      <div className="header-container">
        <div className="row">
          <div className="six columns">
            <Link to="/" ><img role="presentation" id="header-logo" src="/images/youragora-inline-logo.png" /></Link>
          </div>
          <div className="six columns">
            {loggedIn}
          </div>
        </div>
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
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
