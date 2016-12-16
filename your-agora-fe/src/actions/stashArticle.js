import $ from 'jquery'

export default function stashArticle(stashId){
  return function(dispatch){
    $.ajax({
      url: `https://safe-escarpment-99271.herokuapp.com/stashes`,
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
