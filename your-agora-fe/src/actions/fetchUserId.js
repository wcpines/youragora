import $ from 'jquery'
// import { browserHistory } from 'react-router'

export default function fetchUserId(){
  debugger
  return function(dispatch){
    dispatch({type: 'FETCHING_USER'})
    $.ajax({
      url: "http://localhost:3000/users",
      type: "GET",
      header: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      debugger

      dispatch({type: 'FETCH_USER', currentUser: data.current_user}) // NOTE: current_user is from the API/Ruby
      // browserHistory.push('/')
    })
  }
}
