import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function editUser(id, name, email){
  return function(dispatch){
    $.ajax({url: `https://youragora-api-prod.herokuapp.com/users/${id}`,
      type: "PUT",
      data: JSON.stringify({auth: {name: name, email: email}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {authorization: localStorage.getItem('jwt')},
      success: function(data){
        dispatch({type: 'RESET_ERROR_MESSAGE', payload: ""})
        browserHistory.push(`/users/${id}`)
      },
      error: function(xhr){
        var errors = $.parseJSON(xhr.responseText).errors
        dispatch({type: 'ERROR_MESSAGE', payload: errors})
        browserHistory.push(`/users/${id}`)
      }
    })
  }
}
