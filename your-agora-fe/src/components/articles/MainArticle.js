import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThumbsButtons from '../reactions/ThumbsButtons'
import StashButton from '../reactions/StashButton'


class MainArticle extends Component{

  render(){
    return (
      <div>
        <h1>{this.props.article.title}</h1>
        <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: this.props.article.content}} />
        <ThumbsButtons /><br />
        <StashButton />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainArticle)
