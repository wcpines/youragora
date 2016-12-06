import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import GetNextButton from '../reactions/GetNextButton'


function MainTeaser(props){

  let href = '/articles/random/main'

  return(
    <div>
      <img role="presentation" className="thumbnail" src={props.article.img_url} />
      <h1>{props.article.title}</h1>
      <Link to={href} className="button" >Read More</Link><br />
      <GetNextButton text="Skip to Next Article"/>
    </div>
  )
}


function mapStateToProps(state){
  return state.mainArticle
}

export default connect(mapStateToProps)(MainTeaser)
