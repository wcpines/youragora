import $ from 'jquery'

export default function resetUserLean(){
  return function(dispatch){
    $.ajax({
      url: `https://youragora-api-prod.herokuapp.com/leanings/reset`,
      type: "POST",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    })
  }
}
