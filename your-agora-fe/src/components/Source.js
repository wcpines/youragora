import React from 'react'
import { connect } from 'react-redux'

function Source(props){

  return(
    <div>
      {props.sourceName}
      {props.sourceUrl}
    </div>
  )
}

function mapStateToProps(state){
  return {
    sourceName: state.mainArticle.source_name,
    sourceUrl: state.mainArticle.article.url
    }
}

export default connect(mapStateToProps)(Source)
