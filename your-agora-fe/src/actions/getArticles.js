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
      browserHistory.push('/mainteaser')
      dispatch({type: 'FETCH_ARTICLE', payload: data})
    })
  }
}
