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
      loggedIn = <div> <SignUp /> <Link to="/signin" >Sign In</Link> </div>

    }else {
      loggedIn = <div><p> Welcome back user: {this.props.currentUser} </p> <SignOut /></div>
    }
    return (
      <div className="Header">
        <h1 id="header-logo">YourAgora</h1>
        {loggedIn}
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
