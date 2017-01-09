import $ from 'jquery'

export default function fetchStashes(){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/stashes`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    }).done(function(data){
      dispatch({type: 'FETCH_STASHES', payload: data})
    })
  }
}
