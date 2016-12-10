import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  stashArticle  from '../../actions/stashArticle'

class StashButton extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.stashArticle(this.props.stash)
  }

  render(){
    return (
      <button className="button" onClick={this.handleClick}>stash</button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ stashArticle }, dispatch)
}

function mapStateToProps(state){
  return {
    stash: {article_id: state.mainArticle.id, user_id: state.currentUser.userId},
    must: state.mustStash
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StashButton)
