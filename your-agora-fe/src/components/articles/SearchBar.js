import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchArticles from '../../actions/fetchArticles'

class SearchBar extends Component{

  constructor(props){
    super(props)
    this.state = {searchTerm: ""}
    this.handleClick = this.handleClick.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.fetchArticles(this.state.searchTerm, this.props.currentUserId)
  }

  handleSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  render(){

    var fetching_first_article_spinner;
    if(this.props.fetching_first_article){
      fetching_first_article_spinner = <img role="presentation" src="/images/courier.gif" />
    }

    return(
      <div className='search-bar'>
        <form onSubmit={this.handleClick}>
          <input id='search-input' type="text" onChange={this.handleSearch}/>
          <input id="search-button" type='submit' disabled={this.props.fetching} className='search-bar' name='submit' value='Search'/>
        </form>
        {fetching_first_article_spinner}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    fetching: state.articles.fetching,
    fetching_first_article: state.articles.fetching_first_article,
    currentUserId: state.currentUser.userId
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
