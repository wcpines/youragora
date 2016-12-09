import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function fetchArticles(searchTerm){
  return function(dispatch){
    dispatch({type: 'FETCHING_ARTICLES'})
    $.ajax({
      url: `http://localhost:3000/fetch_first_article`,
      type: 'POST',
      data: JSON.stringify({search_term: searchTerm }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function(data){
  //NOTE: DATA IS NOW AN ARRAY OF ARTICLES OBJECTS! NO NEED ANYMORE TO CALL .article ON ANYTHING OTHER THAN STASHES
      dispatch({type: 'FETCH_FIRST_ARTICLE', payload: data})
      dispatch({type: 'FETCHED_FIRST_ARTICLE'})
      browserHistory.push('/articles/random/teaser')
      $.ajax({
        url: `http://localhost:3000/articles`,
        type: 'POST',
        data: JSON.stringify({search_term: searchTerm }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      }).done(function(data){
        dispatch({type: 'FETCH_ARTICLES', payload: data})
      })
    })
  }
}
