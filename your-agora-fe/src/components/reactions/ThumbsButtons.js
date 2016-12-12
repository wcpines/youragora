import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import reactToArticle from '../../actions/reactToArticle'

class thumbsButtons extends Component {

  constructor(props){
    super(props)
    this.handleReaction = this.handleReaction.bind(this)
  }

  handleReaction(event){
    this.props.reactToArticle(this.props.userId, this.props.leaningId, event.target.id, this.props.articleId)
  }

  render(){

    let href = `/articles/random/main/showSource`

    return(
      <div id="reaction-buttons">
        <Link to={href} id="disagree" onClick={this.handleReaction}>
          <img role="presentation" src="/images/thumbs-down.png" />
        </Link>
        <Link to={href} id="neutral" onClick={this.handleReaction} >
          <img role="presentation" src="/images/neutral.png" />
        </Link>
        <Link to={href} id="agree" onClick={this.handleReaction}>
          <img role="presentation" src="/images/thumbs-up.png" />
        </Link>
      </div>
    )
    
  }
}

function mapStateToProps(state){
  return {
    articleId: state.mainArticle.id,
    userId: state.currentUser.userId,
    leaningId: state.currentUser.leaningId
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ reactToArticle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(thumbsButtons)
