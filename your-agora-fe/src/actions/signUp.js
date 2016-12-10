import $ from 'jquery'
import { browserHistory } from 'react-router'

export function signUp(formValues){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users`,
      type: "POST",
      data: JSON.stringify({auth: {email: formValues.email, password: formValues.password, name: formValues.name}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){
      localStorage.setItem('jwt', data.jwt)
      // NOTE: current_user is from SessionsController; render json: {jwt: jwt, current_user: user}
      dispatch({type: 'SIGNIN_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
      debugger
      browserHistory.push('/')
    })
  }
}
