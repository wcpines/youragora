import React from 'react'
import {Link} from 'react-router'
import MenuBar from './MenuBar'
import {connect} from 'react-redux'

function Header(props) {

  return (
    <div className="header-container">
      <div className="row">
        <div className="six columns">
          <Link to="/" >
            <img role="presentation" id="header-logo" src="/images/youragora-inline-logo.png" />
          </Link>
        </div>
        <span className="six columns" id="welcome-message"> Welcome back {props.userName}! </span>
      </div>
      <div className="row">
        <MenuBar />
      </div>
    </div>
  )

}


function mapStateToProps(state){
  return {
    userName: state.currentUser.userName,
    userId: state.currentUser.userId
  }
}

export default connect(mapStateToProps)(Header)
