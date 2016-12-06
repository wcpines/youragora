import React from 'react'
import { getNext } from '../actions/getNext'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function getNextButton(props){

function handleClick(){
  props.getNext(props.mainArticle, props.articles)
}

return <button onClick={handleClick.bind(props)}>{props.text}</button> 
}

function mapStateToProps(state){
  return {
    mainArticle: state.mainArticle,
    articles: state.articles.fetched
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getNext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(getNextButton)