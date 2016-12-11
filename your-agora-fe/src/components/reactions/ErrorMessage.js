import React, { Component } from 'react'
import connect from 'react-redux'


function ErrorMessage(){
	return(<p> props.errorMessage </p>)
}

function mapStateToProps(state){
	return {errorMessage: state.errorMessage}
}

export default connect(mapStateToProps)(ErrorMessage)