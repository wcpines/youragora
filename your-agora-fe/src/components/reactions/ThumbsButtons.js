import React from 'react'
import {Link} from 'react-router';
import { connect } from 'react-redux'


export default function thumbsButtons(props){

  let href = `/articles/random/main/showSource`

  return(
    <div>
      <h1>How do you feel about this?</h1>
      <Link to={href} >Thumbs Up</Link> <br />
      <Link to={href} >Neutral</Link> <br />
      <Link to={href} >Thumbs Down</Link>
    </div>
  )
}
