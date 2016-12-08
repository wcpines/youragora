import $ from 'jquery'

export default function deleteStash(stash){
  return function(dispatch){
    
    $.ajax(
    {
      url: `http://localhost:3000/stashes/delete`,
      type: "DELETE",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({stash: stash}),
      dataType: 'json'
    }).done(function(data){
      dispatch({type: 'DELETE_STASH', payload: data}) 
    })
  }
}
