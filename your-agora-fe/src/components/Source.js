import React from 'react'

export default function Source(props){

  debugger

  return(
    <div>
      {props.source}
    </div>
  )
}

function mapStateToProps(state){
  return {source: state.articles[0].url}
}
