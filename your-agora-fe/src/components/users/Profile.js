import React, {Component}from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import ErrorMessage from  '../reactions/ErrorMessage'
import fetchReactions from '../../actions/fetchReactions'
import fetchUserId from '../../actions/fetchUserId'
import resetUserLean from  '../../actions/resetUserLean'
import deleteUser from  '../../actions/deleteUser'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {success: ""}
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount(){
    this.props.fetchUserId()
  }

  componentDidMount(){
    this.props.fetchReactions()
  }

  handleClick(){
    this.props.resetUserLean()
    this.setState({success: "LEANING RESET!"})
  }

  handleDelete(){
    this.props.deleteUser(this.props.userId)
  }


  render(){

    var reactions = this.props.userReactions.map( reaction => {

      let thumb;
      if(reaction.rating === -1){
        thumb = <img role="presentation" src="/images/thumbs-down.png" />
      } else if (reaction.rating === 1){
        thumb = <img role="presentation" src="/images/thumbs-up.png" />
      } else {
        thumb = <img role="presentation" src="/images/neutral.png" />
      }
      return <li key={reaction.id}> {reaction.article_author}: <a target="_blank" href={reaction.article_url}>{reaction.article_title}</a> {thumb}</li>
    })

    let href = `/users/${this.props.userId}/edit`

    return(

      <div>
        <Header />
        <div id="profile-page">
          <div id="user-info">
            <h3><b>Name</b>: {this.props.userName}</h3>
            <h3><b>Email</b>: {this.props.userEmail}</h3>
            <ErrorMessage />
            <button className="button" onClick={this.handleClick}>Reset my Leaning </button> <span>{this.state.success}</span><br />
            <Link to={href} ><span>Edit Account Details</span></Link> <strong>|</strong> <a onClick={this.handleDelete}id="delete-account" href="#"><span>Delete Account</span></a>
            <br />
            <br />
          </div>
          <div className="reaction-list">
            <b>Recent Reactions</b>
            <ul>{reactions}</ul>
          </div>
        </div>
      </div>
    )

  }

}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId,
    userName: state.currentUser.userName,
    userEmail: state.currentUser.userEmail,
    userReactions: state.reactions.fetched_reactions
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {resetUserLean, fetchReactions, fetchUserId, deleteUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
