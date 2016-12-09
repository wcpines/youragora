import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

function StashIndex(props){
	return(<div>
			<ul>
	{props.stashes.map((stash)=>{;
			return (<li key={stash.id}><Link to={`/articles/${stash.id}/main`}>{stash.article.title}</Link></li>)})}
	</ul>
	</div>)
}




function mapStateToProps(state){
	return {stashes: state.stashes}
}

export default connect(mapStateToProps)(StashIndex)