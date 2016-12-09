import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThumbsButtons from '../reactions/ThumbsButtons'
import StashButton from '../reactions/StashButton'
import UnstashArticleButton from '../reactions/UnstashArticleButton'


class MainArticle extends Component{

  render(){
    var stashOrDeleteButton;
    if(this.props.stashState === false){
          stashOrDeleteButton = <StashButton />
        }
    if(this.props.stashState === true){
          stashOrDeleteButton = <UnstashArticleButton />
    }
    return (
      <div>
        <h1>{this.props.article.title}</h1>
        <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: this.props.article.content}} />
        {stashOrDeleteButton}
        <ThumbsButtons />
        
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {article: state.mainArticle, stashState: state.mainArticle.stashState}
}

export default connect(mapStateToProps)(MainArticle)
