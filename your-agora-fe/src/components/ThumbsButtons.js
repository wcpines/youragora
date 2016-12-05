import React from 'react'
import {Link} from 'react-router';


export default function thumbsButtons(){
  return(
    <div>
    	<h1>How do you feel about this?</h1>
      <h1><Link to="showSource" >Thumbs Up</Link></h1>
      <h1><Link to="showSource" >Neutral</Link></h1>      
      <h1><Link to="showSource" >Thumbs Down</Link></h1>
    </div>
  )
}

