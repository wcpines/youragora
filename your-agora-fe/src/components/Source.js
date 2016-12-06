import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'



function Source(props){

  return(
    <div>
      <h2>{props.sourceName}</h2>
      <Link to={props.sourceUrl} >Read the original</Link>
      <GetNextButton />
    </div>
  )
}


function mapStateToProps(state){
  return {
    sourceName: state.mainArticle.source_name,
    sourceUrl: state.mainArticle.article.url,
    }
}


export default connect(mapStateToProps)(Source)
