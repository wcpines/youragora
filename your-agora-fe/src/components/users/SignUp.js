import React, {Component} from 'react'
import { signUp } from '../../actions/signUp';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignUp extends Component {

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
    this.props.signUp(this.state)
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        Email: <input onChange={this.handleEmail} type="text" /><br />
        Password: <input onChange={this.handlePassword} type="password" />
        <input type="submit" value="Dino Danger!" />
      </form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ signUp: signUp }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
