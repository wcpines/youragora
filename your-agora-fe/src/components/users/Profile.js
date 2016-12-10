import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
// import EditProfileButton from  '../

class Profile extends Component {

  constructor(props){
    super (props)

  }



  render(){

    return(

      <div>
        <ul>
          <li>this.props.userId</li>
          <li>this.props.userName</li>
          <li>this.props.userEmail</li>
        </ul>
      </div>
    )

  }
}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId,
    userName: state.currentUser.userName,
    userEmail: state.currentUser.userEmail,

  }
}

  export default connect(mapStateToProps)(Profile)

  // <h1>Welcome {user.name}</h1>
  // <p>Your email: {user.email}</p>


  // 1. Create the actual component and what it displays
  //    a. Any data can/should be gotten from the state via mapStateToProps
  //    b. Any actions must be performed using mapDispatchToProps and bindActionCreators
  // 2. Create a route to that component
  // 3. Create a link to the given route
