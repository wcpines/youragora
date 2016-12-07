import React from 'react'
import {Link} from 'react-router'
import SearchBar from './articles/SearchBar'
import SignOut from './users/SignOut'

export default function HomePage(props) {

  var loggedIn;

  if (localStorage.jwt === undefined){
    loggedIn =
    <div className="sign-links">
      <Link id="sign-in-link" to="/signin" >Sign In</Link>
      <strong>|</strong>
      <Link id="sign-up-link" to="/signup" >Sign Up</Link>
    </div>
  } else {
    loggedIn = <div className="sign-links"> <span id="welcome-message"> Welcome back! </span> <br /> <SignOut /> </div>
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
    </div>
  )
}
