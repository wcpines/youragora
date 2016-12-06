import React, { Component } from 'react'
import { signIn } from '../../actions/signIn';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'


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
      <div >
      <form onSubmit={this.handleSubmit}>
        LOGIN FORM: <br />
        Email: <input onChange={this.handleEmail} type="text" /><br />
        Password: <input onChange={this.handlePassword} type="password" />
        <input type="submit" value="Double Dino Danger!" />
      </form>
      <Link to='/'>browse as guest</Link>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signIn: signIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignIn)
