import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'
// import { browserHistory } from 'react-router'


function showSource(props){
  let href = `/articles/random/main/source`
  if( props.currentUserId != null ){
    var info = <Link to={href} >Show Source</Link>
  }
  else {
    info = "Make an account"
  }


  return(
    <div>
      {info}
      <GetNextButton text="read next"/>
    </div>
  )
}


function mapStateToProps(state){
  return {
    currentUserId: state.currentUser.userId
  }
}




export default connect(mapStateToProps)(showSource)
