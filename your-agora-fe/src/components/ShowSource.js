import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'


function showSource(props){
  if( props.currentUserId != null ){
  	var test = <Link to="mainarticle/source" >Show Source</Link>
  }
  else {
  	var test = "Make an account"
  }
  return(
    <div>
    	{test}
    </div>
  )
}


function mapStateToProps(state){
  return {currentUserId: state.currentUser.userId}
}

export default connect(mapStateToProps)(showSource)
