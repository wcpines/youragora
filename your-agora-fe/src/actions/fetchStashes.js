import $ from 'jquery'

export default function fetchStashes(){
  return function(dispatch){
    $.ajax({
      url: `https://safe-escarpment-99271.herokuapp.com/stashes`,
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')},
      contentType: 'application/json; charset=utf-8',
    }).done(function(data){
      dispatch({type: 'FETCH_STASHES', payload: data})
    })
  }
}
