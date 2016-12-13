import $ from 'jquery'
import { browserHistory } from 'react-router'

export function signIn(formValues){
  return function(dispatch){
    dispatch({type: 'FINDING_USER'})
    $.ajax({
      url: `http://localhost:3000/sessions`,
      type: "POST",
      data: JSON.stringify({auth: {email: formValues.email.toLowerCase().trim(), password: formValues.password}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
      //     }).done(function(data){
      //       localStorage.setItem('jwt', data.jwt)
      //       // NOTE: current_user is from SessionsController; render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}
      //       dispatch({type: 'SIGNIN_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
      //       browserHistory.push('/')
      //       location.reload()
      //     })
      //   }
      // }
      //ERROR HANDLING WAY TO DO THIS
      , success: function(data){
        localStorage.setItem('jwt', data.jwt)
        // NOTE: current_user is from SessionsController; render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}
        dispatch({type: 'SIGNIN_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
        browserHistory.push('/')
        location.reload()
      }
      , error: function(xhr){
        var errors = $.parseJSON(xhr.responseText).errors
        dispatch({type: 'ERROR_MESSAGE', payload: errors})
      }
    })
  }
}
