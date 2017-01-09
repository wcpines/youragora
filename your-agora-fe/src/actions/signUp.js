import $ from 'jquery'
import { browserHistory } from 'react-router'

export function signUp(formValues){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users`,
      type: "POST",
      data: JSON.stringify({auth: {email: formValues.email.toLowerCase().trim(), password: formValues.password, name: formValues.name.toLowerCase().trim()}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
//     }).done(function(data){
//       localStorage.setItem('jwt', data.jwt)
//       // NOTE: current_user is from SessionsController; render json: {jwt: jwt, current_user: user}
//       dispatch({type: 'SIGNIN_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
//       browserHistory.push('/')
//     })
//   }
// }

//ERROR HANDLING WAY TO DO THIS
      , success: function(data){
          localStorage.setItem('jwt', data.jwt)
          // NOTE: current_user is from SessionsController; render json: {jwt: jwt, current_user: user}
          dispatch({type: 'SIGNIN_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
          browserHistory.push('/')
      }
      , error: function(xhr){
          var errors = $.parseJSON(xhr.responseText).errors
          dispatch({type: 'ERROR_MESSAGE', payload: errors})
      }
    })
  }
}
