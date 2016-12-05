import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'


function showSource(props){
  if( true ){
  	var test = <Link to="mainarticle/showSource/source" >Show Source</Link>
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
  return {userId: state.currentUser.userId}
}

export default connect(mapStateToProps)(showSource)
