import $ from 'jquery'

export default function resetUserLean(){
  return function(dispatch){
    $.ajax({
      url: `https://safe-escarpment-99271.herokuapp.com/leaning/reset`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    })
  }
}
