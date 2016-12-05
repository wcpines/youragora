import React from 'react'
import { connect } from 'react-redux'

function Source(props){

  return(
    <div>
      butts
      {props.source}
    </div>
  )
}

function mapStateToProps(state){
  debugger
  return {source: state.articles.fetched[0].url}
}

export default connect(mapStateToProps)(Source)
