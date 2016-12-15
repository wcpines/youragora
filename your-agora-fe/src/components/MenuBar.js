import React from 'react'
import {Link} from 'react-router'
import SignOut from './users/SignOut'
import {connect} from 'react-redux'

function MenuBar(props) {

  // TODO: Greeting should not be in menu bar, but in header.

  // signed-out-links and signed-in-links both inherit from Header a the moment
  // which is used in App.  How can I make them different on the home
  // page but the same everywhere else.


  // Those two classes also used in homepage via NavBar component.  Need to remain
  // As they ar

  var href = `/users/${props.userId}`
  var loggedIn;

  if (localStorage.jwt === undefined){
    loggedIn =
      <div>
        <div className="signed-out-links">
          <Link to="/" >Home |</Link>
          <Link id="About-link" to="/about" > About |</Link>
          <Link id="sign-in-link" to="/signin" > Sign In |</Link>
          <Link id="sign-up-link" to="/signup" > Sign Up |</Link>
        </div>
      </div>
  } else {
    loggedIn = <div> <span id="welcome-message"> Welcome back {props.userName}! </span>
      <div className="signed-in-links">
        <Link to="/" >Home |</Link>
        <Link id="About-link" to="/about" > About |</Link>
        <Link id="Profile-link" to={href} > My Profile |</Link>
        <Link id="StashIndex-link" to="/stashes" > Stashed Articles |</Link>
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


