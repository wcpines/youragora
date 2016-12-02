import React from 'react'
import { connect } from 'react-redux'

function MainArticle (props){
  return (
    <div>
      <h1>{props.title}</h1>
      <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  )
}

function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainArticle)
