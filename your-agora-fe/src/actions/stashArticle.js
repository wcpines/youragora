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
    }).done(function(data){
      //NOTE DATA IS ONE SING STASH THAT CONSISTS OF AN OBJECT WITH A KEY 'article' WITH THE VALUE OF THE ARTICLE, AND A KEY OF 'id' WITH THE STASH ID
      dispatch({type: 'STASH_ARTICLE', payload: data})
    })
  }
}
