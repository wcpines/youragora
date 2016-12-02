import $ from 'jquery'

// export function makeUser(formValues){

//   return function(dispatch){
//     dispatch({type: 'CREATING_USER'})
//     $.ajax({url: `http://localhost:3000/users`,
//       type: "POST",
//       data: JSON.stringify({auth: {email: formValues.email, password: formValues.password}}),
//       contentType: 'application/json; charset=utf-8'
//       dataType: 'json'
//     }).done(function(data){
//       debugger
//       dispatch({type: 'CREATING_USER', payload: data})
//     })
//   }
// }
