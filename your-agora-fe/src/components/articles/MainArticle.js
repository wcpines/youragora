import React from 'react'
import { connect } from 'react-redux'
import ThumbsButtons from '../reactions/ThumbsButtons'


function MainArticle (props){

  return (
    <div id="main-article">
      <h1>{props.article.title}</h1>
      <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: props.article.content}} />
      <ThumbsButtons />
      {props.children}
    </div>
  )
}

function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainArticle)
