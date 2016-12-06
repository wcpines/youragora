import React from 'react'
import {Link} from 'react-router';


export default function thumbsButtons(){

  return(
    <div>
      <h1>How do you feel about this?</h1>
      <Link to="main/showSource" >Thumbs Up</Link> <br />
      <Link to="main/showSource" >Neutral</Link> <br />
      <Link to="main/showSource" >Thumbs Down</Link>
    </div>
  )
}
