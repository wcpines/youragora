import React from 'react'
import { connect } from 'react-redux'
import ThumbsButtons from './ThumbsButtons'


function MainArticle (props){

  return (
    <div>
      <h1>{props.article.title}</h1>
      <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: props.article.content}} />
      <ThumbsButtons />
      {props.children}
    </div>
  )
}

function mapStateToProps(state){
  // TODO: Right now this is only showing the first article from all the articles we are gathering. eventually we want to fetch one article display it and fetch the rest in the background.
  return state.mainArticle
}

export default connect(mapStateToProps)(MainArticle)
