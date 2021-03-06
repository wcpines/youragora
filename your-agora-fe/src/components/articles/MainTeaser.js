import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import GetNextButton from '../reactions/GetNextButton'
import StashButton from '../reactions/StashButton'
import UnstashArticleButton from '../reactions/UnstashArticleButton'

function MainTeaser(props){

  let href = '/articles/random/main'

  let preview = previewContent(props.article.content, props.article)

  let readTime = calculateReadTime(props.article.word_count)

  if(localStorage.jwt !== undefined){
    var stashOrDeleteButton;
    if(props.stashState === false){
      stashOrDeleteButton = <StashButton />
    }
    if(props.stashState === true){
      stashOrDeleteButton = <UnstashArticleButton />
    }
  }
  return(
    <div id="main-teaser">
      <img role="presentation" className="thumbnail" src={props.article.img_url} />
      <h1>{props.article.title}</h1>
      <p>{readTime}</p>
      {stashOrDeleteButton} <br />
      <p>//</p>
      {<div id="teaser-preview" style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html:preview}} />}
      <Link to={href} className="button" >Read More</Link>
      <GetNextButton text="Next Article"/>
    </div>
  )
}


function mapStateToProps(state){
  return {
    article: state.mainArticle,
    stashState: state.mainArticle.stashState
  }
}

export default connect(mapStateToProps)(MainTeaser)

// function redacts source names from article content before returning it to the page.
function previewContent(content, article){

  var regex = new RegExp(article.sourceName, 'g', 'i')
  var redactedContent = content.replace(regex, "[REDACTED BY YOURAGORA]")

  if(redactedContent.includes("<p>")){
    if(redactedContent.match(/<p>/g).length > 2){
      var fixedContent = redactedContent.replace(/(<img)(.*?)(>)/g, '')
      var pattern = /(<p>)(.*?)(<\/p>)/g
      // TODO: Can we loop this more elegantly?
      var par1 = pattern.exec(fixedContent)[0]
      var par2 = pattern.exec(fixedContent)[0]
      var par3 = pattern.exec(fixedContent)[0]
      var par4 = pattern.exec(fixedContent)[0]
      return [par1, par2, par3, par4].join(" ")
    } else {
      return '';}
  } else {
    return ''
  }

}

function calculateReadTime(word_count){
  let readTime = Math.round(word_count / 200)
  let readTimeReturn;
  word_count >= 200 ? readTimeReturn = readTime.toString() + " minute read" : readTimeReturn = ""
  return readTimeReturn
}
