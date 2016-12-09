import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'
import GetNextButton from './GetNextButton'

function Source(props){

  // I swear this was the fastest way I saw
  let domain = props.sourceUrl.replace(/\//gi, '$/').split('$').slice(0,3).join('')

  return(
    <div>
      <h2><a id="source-link" href={domain}>{props.sourceName}</a></h2>
      <a className="button" href={props.sourceUrl} target="_blank">Read the original</a>
      <GetNextButton text="Next Article" />
    </div>
  )
}

function mapStateToProps(state){
  return {
    sourceName: state.mainArticle.sourceName,
    sourceUrl: state.mainArticle.url
    }
}

export default connect(mapStateToProps)(Source)
