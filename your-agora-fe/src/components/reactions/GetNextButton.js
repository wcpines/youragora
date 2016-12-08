import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  getNext  from '../../actions/getNext'

function GetNextButton(props){

  function handleClick(){
    window.scrollTo(0,0)
    props.getNext(props.mainArticle, props.articles, props.stashes)
  }

  return (
    <button className="button" onClick={handleClick.bind(props)}>{props.text}</button>
  )
}

function mapStateToProps(state){
  return {
    mainArticle: state.mainArticle,
    articles: state.articles.fetched,
    stashes: state.stashes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getNext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetNextButton)
