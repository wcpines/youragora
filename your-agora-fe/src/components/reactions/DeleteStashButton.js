import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteStash from '../../actions/deleteStash'
import resetStash from '../../actions/resetStash'

class DeleteStashButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteStash(this.props.stash)
  }

  render(){
    return (
      <button className="button" onClick={this.handleClick}>Don't Press!</button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteStash }, dispatch)
}

function mapStateToProps(state){
  return {
    stash: {article_id: state.mainArticle.article.id, user_id: state.currentUser.userId}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStashButton)
