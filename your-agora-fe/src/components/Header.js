import React from 'react'
import {Link} from 'react-router'
import NavBar from './NavBar'

export default function Header() {

  return (
    <div className="header-container">
      <div className="row">
        <div className="six columns">
          <Link to="/" ><img role="presentation" id="header-logo" src="/images/youragora-inline-logo.png" /></Link>
        </div>
        <div className="six columns">
          <NavBar />
        </div>
      </div>
    </div>
  )

}
