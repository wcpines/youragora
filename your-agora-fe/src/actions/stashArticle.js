import $ from 'jquery'

export default function stashArticle(stashId){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/stashes`,
      type: "POST",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({stash: stashId}),
      dataType: 'json'
    }).done(function(data){
      dispatch({type: 'STASH_ARTICLE', payload: data})
    })
  }
}
