import $ from 'jquery'

export default function fetchUserId(){
  debugger
  return function(dispatch){
    dispatch({type: 'FETCHING_USER'})
    $.ajax({
      url: "http://localhost:3000/users",
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      debugger
      // NOTE: render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}
      dispatch({type: 'FETCH_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
    })
  }
}
