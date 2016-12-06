import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';


function MainTeaser(props){

  let href = '/articles/random/main'

  return(
    <div>
      <img className="thumbnail" src={props.article.img_url} />
      <h1>{props.article.title}</h1>
      <Link to={href} className="button" >Read More</Link>
    </div>
  )
}


function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainTeaser)
