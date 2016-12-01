import $ from 'jquery'

export function fetchUsers(searchTerm){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users/${searchTerm}`,
            type: "GET"
          })
      .done(function(data){

        debugger

      dispatch({type: 'FETCH_USERS', payload: data})
    })
  }
}
