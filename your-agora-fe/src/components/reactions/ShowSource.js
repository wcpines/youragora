import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'

function showSource(props){

  let href = `/articles/random/main/source`
  var info

  if( props.currentUserId != null ){
    info = <Link to={href} className="button">Show Source</Link>
  }
  else {
    info = "Make an account"
  }

  return(
    <div>
      {info}
      <GetNextButton text="Next Article"/>
    </div>
  )
}


function mapStateToProps(state){
  return {
    currentUserId: state.currentUser.userId
  }
}

export default connect(mapStateToProps)(showSource)
