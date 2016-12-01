import React, { Component } from 'react'
import { getArticle } from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component{
    handleClick(event){
        event.preventDefault()
        this.props.getArticle(event.target.children[0].value)
    }

    render(){
        return(
            <form className='search-bar' onSubmit={this.handleClick.bind(this)}>
                <input type="text" />
                <label className='search-bar'>Search Bar</label>
                <input type='submit' className='search-bar' name='submit' />
            </form>
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
