import $ from 'jquery'

export function fetchUsers(searchTerm){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users`,
      type: "GET",
      headers: {authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.KKOVi8tFRFO8zz6Jg9se4f14XfknuWcgtDArATr2PE4"}
    }).done(function(data){
      debugger
      dispatch({type: 'FETCH_USERS', payload: data})
    })
  }
}
