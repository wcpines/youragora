import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function deleteUser(id){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users/${id}`,
      type: "DELETE",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(
      localStorage.removeItem('jwt'),
      browserHistory.push('/')
    )
  }
}
