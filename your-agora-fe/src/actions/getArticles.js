import $ from 'jquery'
import { browserHistory } from 'react-router'

export function getArticles(searchTerm){
  return function(dispatch){
    dispatch({type: 'FETCHING_ARTICLES'})
    $.ajax({
      url: `http://localhost:3000/articles`,
      type: 'POST',
      data: JSON.stringify({search_term: searchTerm }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){
      dispatch({type: 'FETCH_ARTICLES', payload: data})
      browserHistory.push(`articles/${data[0].article.id}/teaser`)
    })
  }
}
