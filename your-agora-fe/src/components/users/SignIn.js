import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { signIn } from '../../actions/signIn';

class SignIn extends Component {

  constructor(props){
    super(props)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {email: "", password: ""}
  }

  handleEmail(event){
    this.setState({email: event.target.value})
  }

  handlePassword(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.signIn(this.state)
  }

  render(){

    return(
      <div id="signin-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email-input">Email:</label>
          <input className="email-input u-full-width" onChange={this.handleEmail} type="text" />
          <label htmlFor="email-input">Password:</label>
          <input className="password-input u-full-width" onChange={this.handlePassword} type="password" /><br />
          <input id="signin-button" className="u-full-width button" type="submit" value="Double Dino Danger!" />
        </form>
        <Link to='/'>Browse as Guest</Link>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signIn: signIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignIn)
