import React from 'react'
import {Link} from 'react-router'
import SignOut from './users/SignOut'
import {connect} from 'react-redux'

function MenuBar(props) {

  var href = `/users/${props.userId}`
  var loggedIn;

  if (localStorage.jwt === undefined){
    loggedIn =
      <div>
        <div className="signed-out-links">
          <Link to="/" > Home </Link>|
          <Link id="sign-in-link" to="/signin" >  Sign In </Link>|
          <Link id="sign-up-link" to="/signup" >  Sign Up </Link>|
          <Link id="About-link" to="/about" >  About </Link>|
        </div>
      </div>
  } else {
    loggedIn =
      <div>
        <div className="signed-in-links">
          <Link to="/" > Home </Link>|
          <Link id="About-link" to="/about" >  About </Link>|
          <Link id="Profile-link" to={href} >  My Profile </Link>|
          <Link id="StashIndex-link" to="/stashes" >  Stashed Articles </Link>|
          <SignOut />
        </div>
      </div>
  }

  return (
    <div className="menu-bar-container">
      {loggedIn}
    </div>
  )

}

function mapStateToProps(state){
  return {
    userName: state.currentUser.userName,
    userId: state.currentUser.userId
  }
}

export default connect(mapStateToProps)(MenuBar)


