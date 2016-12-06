import $ from 'jquery'

export default function stashArticle(stash){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/stashes`,
      type: "POST",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({stash: stash}),
      dataType: 'json'
    })
  }
}
