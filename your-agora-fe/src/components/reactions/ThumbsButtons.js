import React from 'react'
import {Link} from 'react-router';


export default function thumbsButtons(props){

  let href = `/articles/random/main/showSource`

  return(
    <div id="reaction-buttons">
      <Link to={href} > <img src="/images/thumbs-up.png" /> </Link>
      <Link to={href} > ¯\_(ツ)_/¯ </Link>
      <Link to={href} > <img src="/images/thumbs-down.png" /> </Link>
    </div>
  )
}
