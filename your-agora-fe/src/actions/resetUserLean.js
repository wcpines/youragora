import $ from 'jquery'

export default function resetUserLean(){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/leaning/reset`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    })
  }
}
