import React from 'react'
import { connect } from 'react-redux'
// import EditProfileButton from  '../

function Profile(props) {



  return(

    <div id="profile-page">

      <div id="user-info">
        <li>{props.userName}</li>
        <li>{props.userEmail}</li>
      </div>

    </div>
  )

}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId,
    userName: state.currentUser.userName,
    userEmail: state.currentUser.userEmail,

  }
}

export default connect(mapStateToProps)(Profile)
