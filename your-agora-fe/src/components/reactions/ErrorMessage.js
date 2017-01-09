import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorMessage extends Component{

  render(){
    return(<p id="error-message"> {this.props.errorMessage} </p>)
  }
}


function mapStateToProps(state){
  return {errorMessage: state.errorMessage}
}


export default connect(mapStateToProps)(ErrorMessage)
