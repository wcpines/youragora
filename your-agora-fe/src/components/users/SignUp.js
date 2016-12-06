import React, {Component} from 'react'
import { makeUser } from '../../actions/makeUser';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    this.props.makeUser(this.state)
  }

  render(){

    return(
      <div id="sign-up">
        <form onSubmit={this.handleSubmit}>
          Name: <input onChange={this.handleName} type="text" />
          Email: <input onChange={this.handleEmail} type="text" />
          Password: <input onChange={this.handlePassword} type="password" />
          <input type="submit" value="Dino Danger!" />
        </form>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ makeUser: makeUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
