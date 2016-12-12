import React from 'react'
import {Link} from 'react-router'
import SignOut from './users/SignOut'
import {connect} from 'react-redux'

function NavBar(props) {

  // About Us
    // Motivation/history of the ssite
    // three sections for each contributor
  // My Profile
  // My Stashed Articles

  var href = `/users/${props.userId}`
  var loggedIn;

  if (localStorage.jwt === undefined){
    loggedIn =
      <div className="signed-out-links">
        <Link to="/" >Home</Link><br />
        <Link id="About-link" to="/about" >About</Link><br />
        <Link id="sign-in-link" to="/signin" >Sign In</Link><br />
        <Link id="sign-up-link" to="/signup" >Sign Up</Link>
      </div>
  } else {
    loggedIn = <div className="signed-in-links"> <span id="welcome-message"> Welcome back {props.userName}! </span> <br />
      <Link to="/" >Home</Link><br />
      <Link id="About-link" to="/about" >About</Link><br />
      <Link id="Profile-link" to={href} >My Profile</Link><br />
      <Link id="StashIndex-link" to="/stashes" >Stashed Articles</Link> <br />
      <SignOut />
    </div>
  }

  return (
    <div className="nav-bar-container">
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

export default connect(mapStateToProps)(NavBar)
