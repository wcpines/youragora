import React, {Component} from 'react'
import NavBar from '../NavBar'
import { signUp } from '../../actions/signUp';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ErrorMessage from '../reactions/ErrorMessage'
import resetErrorMessage from '../../actions/resetErrorMessage'

class SignUp extends Component {

  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {email: "", password: ""}
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleEmail(event){
    this.setState({email: event.target.value})
  }

  handlePassword(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render(){

    return(
      <div>
        <NavBar />
          <div id="signup-container">
            <h3>Sign Up</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name-input">Name:</label>
              <input className="u-full-width" onChange={this.handleName} type="text" />
              <label htmlFor="email-input">Email:</label>
              <input className="u-full-width" onChange={this.handleEmail} type="text" />
              <label htmlFor="password-input">Password:</label>
              <input className="u-full-width" onChange={this.handlePassword} type="password" />
              <input className="u-full-width button" id="signup-button" type="submit" value="Sign Up!" />
              <ErrorMessage />
            </form>
            <Link id="already-a-member" to='/signin'><p>Already a member? Sign In</p></Link>
          </div>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signUp: signUp, resetErrorMessage: resetErrorMessage }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
