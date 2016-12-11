import React from 'react'
import { Link } from 'react-router'

export default function Footer(props) {

  return (
    <div id="not-found">
    <h1>Sorry we cant find</h1>
    <h1>the page you are looking for</h1>
    <img src="https://cdn.drawception.com/images/panels/2015/3-22/6DCA2LqgT1-6.png" />
    <br />
    <Link to="/" ><h4>Back to home</h4></Link>
    </div>
  )

}
