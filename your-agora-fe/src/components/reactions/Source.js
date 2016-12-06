import React from 'react'
import {Link} from 'react-router';
import { getNext } from '../../actions/getNext'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


function Source(props){

function handleClick(){
  props.getNext(props.mainArticle, props.articles)
}

  return(
    <div>
      <h2>{props.sourceName}</h2>
      <Link to={props.sourceUrl} >Read the original</Link>
      <button onClick={handleClick.bind(props)}> Next </button>
    </div>
  )
}


function mapStateToProps(state){
  return {
    sourceName: state.mainArticle.source_name,
    sourceUrl: state.mainArticle.article.url,
    mainArticle: state.mainArticle,
    articles: state.articles.fetched
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getNext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Source)
