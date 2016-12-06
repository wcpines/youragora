import React from 'react'
import {Link} from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNext } from '../../actions/getNext'
// import { browserHistory } from 'react-router'


function showSource(props){

  let href = `/articles/random/main/source`
  if( props.currentUserId != null ){
    var info = <Link to={href} >Show Source</Link>
  }
  else {
    var info = "Make an account"
  }

  function handleClick(){
    props.getNext(props.mainArticle, props.articles)
  }

  return(
    <div>
      {info}
      <button onClick={handleClick.bind(props)}> Next </button>
    </div>
  )
}


function mapStateToProps(state){
  return {
    currentUserId: state.currentUser.userId,
    mainArticle: state.mainArticle,
    articles: state.articles.fetched
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getNext}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(showSource)
