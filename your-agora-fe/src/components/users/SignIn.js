import React, { Component } from 'react'
import NavBar from '../NavBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { signIn } from '../../actions/signIn';
import ErrorMessage from '../reactions/ErrorMessage'
import resetErrorMessage from '../../actions/resetErrorMessage'


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

  componentWillUnmount(){
    this.props.resetErrorMessage()
  }

  render(){

    return(
      <div>
        <NavBar />
          <div id="signin-container">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>
              <label htmlFor="email-input">Email:</label>
              <input className="email-input u-full-width" onChange={this.handleEmail} type="email" />
              <label htmlFor="password-input">Password:</label>
              <input className="password-input u-full-width" onChange={this.handlePassword} type="password" /><br />
              <input id="signin-button" className="u-full-width button" type="submit" value="Sign In!" />
              <ErrorMessage />
            </form>
            <Link id="browse-as-guest" to='/'><p>Browse as Guest</p></Link>
          </div>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signIn: signIn, resetErrorMessage: resetErrorMessage }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignIn)
