import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import unstashArticle from '../../actions/unstashArticle'

class UnstashArticleButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.unstashArticle(this.props.stashId)
  }

  render(){
    return (
      <button className="button" onClick={this.handleClick}>Unstash</button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ unstashArticle }, dispatch)
}

function mapStateToProps(state){
  var stashId;
  if(state.stashes.some((stash)=>stash.article.id === state.mainArticle.id)){
     stashId = state.stashes.find((stash)=>stash.article.id === state.mainArticle.id).id
  } else {
    stashId = "not stashed"
  }
  return { stashId: stashId }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnstashArticleButton)
