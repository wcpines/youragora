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
    sourceName: state.articles.fetched[0].source_name,
    sourceUrl: state.articles.fetched[0].article.url
    }
}

export default connect(mapStateToProps)(Source)
