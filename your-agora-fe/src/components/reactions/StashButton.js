import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  stashArticle  from '../../actions/stashArticle'

function StashButton(props){

  function handleClick(){
    props.stashArticle(props.stash)
  }


  return (
    <button className="button" onClick={handleClick.bind(props)}>{props.must}</button>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({stashArticle}, dispatch)
}

function mapStateToProps(state){
  return {
    stash: {article_id: state.mainArticle.article.id, user_id: state.currentUser.userId},
    must: state.mainArticle.must // teehee puns. Set in reducer to change button upon stash action
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StashButton)
