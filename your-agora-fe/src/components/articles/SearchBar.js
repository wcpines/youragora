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
    this.props.fetchArticles(this.state.searchTerm)
  }

  handleSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return(
      <div id={this.props.idProps} >
        <form onSubmit={this.handleClick}>
          <input id='search-input' type="text" onChange={this.handleSearch}/>
          <input id="search-button" type='submit' disabled={this.props.fetching} className='search-bar' name='submit' value='Search'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {fetching: state.articles.fetching}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
