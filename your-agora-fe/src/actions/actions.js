import $ from 'jquery'

export function fetchUsers(searchTerm){
  return function(dispatch){
    $.ajax({url: `http://localhost:3000/users`,
      type: "GET",
      headers: {authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.KKOVi8tFRFO8zz6Jg9se4f14XfknuWcgtDArATr2PE4"}
    }).done(function(data){
      debugger
      dispatch({type: 'FETCH_USERS', payload: data})
    })
  }
}

export function getArticle(searchTerm){
  return function(dispatch){
    $.ajax({url: `https://mercury.postlight.com/parser?url=${searchTerm}`,
      type: "GET",
      contentType: "application/json",
      headers: {"x-api-key": "T9b6wK7r9S9HC6jFHYtDY9EaErommV6q3wu0bRcc"}})
      .done(function(data){
        let article = {
          title: data.title,
          author: data.author,
          image_url: data.lead_image_url,
          url: data.url,
          content: data.content,
          date_published: data.date_published
        }
        dispatch({type: 'FETCH_ARTICLE', payload: article})
      })
    }
  }
