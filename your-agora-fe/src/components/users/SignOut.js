import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import signOut from '../../actions/signOut'

function SignOut(props){

  function handleClick(){
    localStorage.removeItem('jwt')
    props.signOut()
    browserHistory.push('/')
    location.reload()
  }

  return (
    <a id="sign-out-link" onClick={handleClick.bind(props)}>  Sign Out</a>
  )


}
function mapDispatchToProps(dispatch){
  return bindActionCreators({signOut}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignOut)
