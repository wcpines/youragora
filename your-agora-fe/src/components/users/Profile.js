import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
// import EditProfileButton from  '../

function Profile(props) {

  // > props.userReactions[0]
  // < {
  //  id: 1,
  //  rating: -1,
  //  article_title: "Hooded Thieves Swarm San Francisco Apple Store, Swipe Gadgets",
  //  article_url: "http://www.huffingtonpost.com/entry/apple-store-theft-san-francisco_us_584a8b88e4b04c8e2baf477d",
  //  article_author: "Lee Moran"}article_author:
  // }

  var reactions = props.userReactions.map( reaction =>
    { return <li> {reaction.article_author}:<a href={reaction.article_url}>{reaction.article_title}</a>; {reaction.rating}</li>
  })

debugger
return(

  <div id="profile-page">

    <Header />

    <div id="user-info">
      <h3><b>Name</b>: {props.userName}</h3> <br />
      <h3><b>Email</b>: {props.userEmail}</h3>
    </div>

    <div className="reaction-list">
      <b>Recent Reactions</b>

      <ul>{reactions}</ul>

    </div>

  </div>
)

}

function mapStateToProps(state){
  return {
    userId: state.currentUser.userId,
    userName: state.currentUser.userName,
    userEmail: state.currentUser.userEmail,
    userReactions: state.reactions.fetched_reactions
  }
}

export default connect(mapStateToProps)(Profile)
