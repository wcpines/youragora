import React, { Component } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import {connect} from 'react-redux'
import SearchBar from './SearchBar'


class App extends Component {
  render() {
    var loggedIn 
    if (localStorage.jwt === undefined){
      loggedIn = <div><SignUp /> <br /> <SignIn /></div>

    }else { 
      loggedIn = <p> You are logged in </p> 
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

export default connect(mapStateToProps)(App)
