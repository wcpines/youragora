import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ReadStashedButton from './reactions/ReadStashedButton'

function StashIndex(props){
	return(<div>
			<Header />
			<ul>
	{props.stashes.map((stash)=>{
		return (<li key={stash.id}><ReadStashedButton key={stash.id} article={stash.article} title={stash.article.title} /></li>)})}
	</ul>
	</div>)
}

function mapStateToProps(state){
  return {stashes: state.stashes}
}

export default connect(mapStateToProps)(StashIndex)
