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


export function getArticle(searchTerm){
  return function(dispatch){
    dispatch({type: 'FETCHING_ARTICLES'})
    $.ajax({
      url: `http://localhost:3000/articles`,
      type: 'POST',
      data: JSON.stringify({search_term: searchTerm }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){


      debugger
    })
  }
}

// function getArticleHTML(url, key){
//   return function(dispatch){
//     $.ajax({url: `https://mercury.postlight.com/parser?url=${url}`,
//       type: "GET",
//       contentType: "application/json",
//       headers: {"x-api-key": `${key}`}})
//       .done(function(data){
//         let article = {
//           title: data.title,
//           author: data.author,
//           image_url: data.lead_image_url,
//           url: data.url,
//           content: data.content,
//           date_published: data.date_published
//         }
//         dispatch({type: 'FETCH_ARTICLE', payload: article})
//       })
//     }
//   }
