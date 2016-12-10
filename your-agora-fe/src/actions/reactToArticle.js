import $ from 'jquery'

export default function reactToArticle(userId, leaningId, reaction, articleId){

  var rating;
  switch (reaction) {
    case 'agree':
      rating = 1
      break
    case 'disagree':
      rating = -1
      break
    default:
      rating = 0
      break
  }

  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/reactions`,
      type: "POST",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({reaction: {user_id: userId, rating: rating, article_id: articleId}}),
      dataType: 'json'
    }).done(function(data){
      $.ajax({
        url: `http://localhost:3000/leanings/${leaningId}`,
        type: "PUT",
        headers: {authorization: localStorage.getItem('jwt')},
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({leaning: {leaning_id: leaningId, rating: rating, article_id: articleId}}),
        dataType: 'json'
      })
    })
  }
}
