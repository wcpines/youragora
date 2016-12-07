import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'



function Source(props){

  return(
    <div>
      <h2 id="source-display">{props.sourceName}</h2>
      <a className="button" href={props.sourceUrl} target="_blank">Read the original</a>
      <GetNextButton text="Next Article" />
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
