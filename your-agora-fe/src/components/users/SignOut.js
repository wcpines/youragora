import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import signOut from '../../actions/signOut'

function SignOut(props){
	debugger

  function handleClick(){
    localStorage.removeItem('jwt')
    browserHistory.push('/')
    props.signOut()

  }

  return (
    <button onClick={handleClick.bind(props)}>Sign Out</button>
  )


}
function mapDispatchToProps(dispatch){
  return bindActionCreators({signOut}, dispatch)
}


export default connect(null, mapDispatchToProps)(SignOut)
