import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThumbsButtons from '../reactions/ThumbsButtons'
import StashButton from '../reactions/StashButton'
import UnstashArticleButton from '../reactions/UnstashArticleButton'
// import { browserHistory } from 'react-router'



class MainArticle extends Component{

  render(){
    // if(this.props.article.id === undefined){
    //       browserHistory.push('/')}
    if (localStorage.jwt !== undefined){
      var stashOrDeleteButton;
      if(this.props.stashState === false){
        stashOrDeleteButton = <StashButton />
      }
      if(this.props.stashState === true){
        stashOrDeleteButton = <UnstashArticleButton />
      }
    }

    var regex = new RegExp(this.props.article.sourceName, 'g', 'i')
    var redactedContent = this.props.article.content.replace(regex, "[REDACTED BY YOURAGORA]")


    return (
      <div>
        <h1>{this.props.article.title}</h1>
        <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: redactedContent}} />
        {stashOrDeleteButton} <br />
        <ThumbsButtons />

        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    article: state.mainArticle,
    stashState: state.mainArticle.stashState
  }
}

export default connect(mapStateToProps)(MainArticle)
