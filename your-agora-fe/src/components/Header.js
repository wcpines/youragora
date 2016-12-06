import React, { Component } from 'react'
import {Link} from 'react-router'
import SignUp from './users/SignUp'
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
    }else {
      loggedIn = <div><p> Welcome back {this.props.currentUser} </p> <SignOut /></div>
    }
    return (
      <div className="header-container">
        <img id="header-logo" src="/images/youragora-logo.png" />
        <div id="login-container">
          {loggedIn}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser.userName}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
