import React, { Component } from 'react'
import { connect } from 'react-redux'
import resetErrorMessage from '../../actions/resetErrorMessage'
import { bindActionCreators } from 'redux'



class ErrorMessage extends Component{



	render(){
		return(<p> {this.props.errorMessage} </p>)
	}
}


function mapStateToProps(state){
	return {errorMessage: state.errorMessage}
}


export default connect(mapStateToProps)(ErrorMessage)