import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ReadStashedButton from './reactions/ReadStashedButton'
import unstashArticle from '../actions/unstashArticle'
import fetchStashes from '../actions/fetchStashes'
import { bindActionCreators } from 'redux'

class StashIndex extends Component {


  constructor (props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    if(this.props.userId === null && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
    }
  }


  // NB: Currently we're making certain pages into smart components to allow lifecycle methods like this.
  // Reason being that manual refreshes are clearing the state of (e.g.) stashes and reactions.  So you need to re-retrieve them.
  // The reason they're cleared in the first place is that the routes aren't a child of the App component, and the reason they're not
  // is that we never determined how to prevent refreshes from breaking the CSS.  So we make things re-route to home if there's no main
  // article ID in the state.  It's pretty shit.

  componentDidMount(){
    this.props.fetchStashes()
  }
  handleClick(event){
    this.props.unstashArticle(event.target.id)
  }

  render(){


    return(
      <div>
        <Header />
        <div className="stash-list">

          <ol>
            {this.props.stashes.map((stash)=>{ return (
              <li key={stash.id}><ReadStashedButton article={stash.article} title={stash.article.title} />
                <img onClick={this.handleClick} id={stash.id}src="/images//trashcan.png" />
              </li>)}
            )}
          </ol>

        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {stashes: state.stashes}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ unstashArticle, fetchStashes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StashIndex)
