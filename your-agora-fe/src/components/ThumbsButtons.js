import React from 'react'
import {Link} from 'react-router';


export default function thumbsButtons(){

  return(
    <div>
      <h1>How do you feel about this?</h1>
      <Link to="mainarticle/showSource" >Thumbs Up</Link>
      <Link to="mainarticle/showSource" >Neutral</Link>
      <Link to="mainarticle/showSource" >Thumbs Down</Link>
    </div>
  )
}
