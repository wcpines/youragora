import React, { Component } from 'react'
import {Link} from 'react-router'
import SignOut from './users/SignOut'
import fetchUserId from '../actions/fetchUserId'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'



class Header extends Component {

  render() {

    var loggedIn

    if (localStorage.jwt === undefined){
      loggedIn =
      <div id="sign-links">
        <Link id="sign-in-link" to="/signin" >Sign In</Link>
        <strong>|</strong>
        <Link id="sign-up-link" to="/signup" >Sign Up</Link>
      </div>
    } else {
      loggedIn = <div> <span id="welcome-message"> Welcome back {this.props.currentUser}! </span> <br /> <SignOut /> </div>
    }

    return (
      <div className="header-container row">
        <img role="presentation" id="header-logo" src="/images/youragora-logo.png" />
        <div id="login-container" >
          {loggedIn}
        </div>

      </div>
    )

  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser.userName}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
