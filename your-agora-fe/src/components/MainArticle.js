import React from 'react'
import { connect } from 'react-redux'

function MainArticle (props){
    debugger
    var article = props.mainArticle.replace(/</g,"%3C").replace(/>/g,"%3E")
    var src = "data:text/html;charset=utf-8, " + article
    return (
      <div>
        <iframe src={src} width="1500px" height="1000px" />
      </div>
    )
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(MainArticle)
