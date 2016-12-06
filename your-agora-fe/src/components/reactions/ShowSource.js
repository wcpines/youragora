import React from 'react'
import {Link} from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'

function showSource(props){

  let href = `/articles/random/main/source`
  if( props.currentUserId != null ){
    var info = <Link to={href} >Show Source</Link>
  }
  else {
    var info = "Make an account"
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
