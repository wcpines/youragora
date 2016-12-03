import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';


function MainTeaser(props){
  return(
    <div>
      <img className="thumbnail" src={props.img_url} />
      <h1>{props.title}</h1>
      <Link to="mainarticle" className="button" >Read More</Link>
    </div>
  )
}


function mapStateToProps(state){
  return state.fetchedArticles[0]
}

export default connect(mapStateToProps)(MainTeaser)
