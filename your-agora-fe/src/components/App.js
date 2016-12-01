import React, { Component } from 'react'
import Form from './Form'
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Users />
      </div>
    );
  }
}

export default App;
