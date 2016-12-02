import $ from 'jquery'

export function getArticle(searchTerm){
  return function(dispatch){
    
    $.ajax({url: `https://mercury.postlight.com/parser?url=${searchTerm}`,
            type: "GET",
            contentType: "application/json",
            headers: {"x-api-key": "T9b6wK7r9S9HC6jFHYtDY9EaErommV6q3wu0bRcc"}})
      .done(function(data){
      	debugger
      	let article = 	{title: data.title,
      				author: data.author,
      				image_url: data.lead_image_url,
      				url: data.url,
      				content: data.content,
      				date_published: data.date_published}
      dispatch({type: 'FETCH_CONTENT', payload: article})

  	})
	}
}
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
