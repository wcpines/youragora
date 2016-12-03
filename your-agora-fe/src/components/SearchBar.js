import React, { Component } from 'react'
import { getArticle } from '../actions/getArticles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router';

class SearchBar extends Component{
  handleClick(event){
    event.preventDefault()
    this.props.getArticle(event.target.children[0].value)
  }

  render(){
    return(

      <div >

        <form className='search-bar' onSubmit={this.handleClick.bind(this)}>

          <label htmlFor='search' className='search-bar'>Search for a topic: </label>
          <input id='search' type="text" />
          <input type='submit' className='search-bar' name='submit' value='Search'/>

        </form>

        <Link to="mainarticle" className="button" >see article</Link>

      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getArticle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
