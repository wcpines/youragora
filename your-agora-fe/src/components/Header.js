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
        <Link id="sign-up-link" to="/signup" >Sign Up</Link>
      </div>
    }else {
      loggedIn = <div><p> Welcome back user: {this.props.currentUser} </p> <SignOut /></div>
    }
    return (
      <div className="Header">
        <h1 id="header-logo">YourAgora</h1>
        <div id="login-container">
          {loggedIn}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
