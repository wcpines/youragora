import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Header'
import editUser from '../../actions/editUser'

class EditUser extends Component {

  constructor(props){
    super(props)
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    this.state = {newName: this.props.userName, newEmail: this.props.userEmail}
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.editUser(this.props.userId, this.state.newName, this.state.newEmail)
  }

  handleName(event){
    this.setState({newName: event.target.value})
  }

  handleEmail(event){
    this.setState({newEmail: event.target.value})
  }

  render(){

    return(

      <div>
        <Header />
        <div id="edit-user-container">
          <h3>Edit Info</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name-input">Name:</label>
            <input className="u-full-width" onChange={this.handleName} type="text" value={this.state.newName} />
            <label htmlFor="email-input">Email:</label>
            <input className="u-full-width" onChange={this.handleEmail} type="text" value={this.state.newEmail} />
            <input className="u-full-width button" id="edit-user-button" type="submit" value="Update Info" />
          </form>
        </div>
      </div>
    )

  }

}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId,
    userName: state.currentUser.userName,
    userEmail: state.currentUser.userEmail
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { editUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
