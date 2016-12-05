import React, { Component } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import fetchUserId from '../actions/fetchUserId'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchBar from './SearchBar'


class App extends Component {

  componentWillMount(){
    if(this.props.currentUser === null && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
    }
  }

  render() {
    var loggedIn
    if (localStorage.jwt === undefined){
      loggedIn = <div><SignUp /> <br /> <SignIn /></div>

    }else {
      loggedIn = <p> Youre user id is {this.props.currentUser} </p>
    }
    return (
      <div className="App">
        <SearchBar />
        {loggedIn}
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser.userId}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
