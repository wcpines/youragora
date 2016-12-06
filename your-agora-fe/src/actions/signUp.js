import $ from 'jquery'
import { browserHistory } from 'react-router'

export function signUp(formValues){
  return function(dispatch){
    dispatch({type: 'MAKING_USER'})
    $.ajax({url: `http://localhost:3000/users`,
      type: "POST",
      data: JSON.stringify({auth: {email: formValues.email, password: formValues.password, name: formValues.name}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){
      localStorage.setItem('jwt', data.jwt)
      dispatch({type: 'SIGNIN_USER', currentUser: data.current_user}) // NOTE: current_user is from the API/Ruby
      browserHistory.push('/')
    })
  }
}
