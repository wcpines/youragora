import $ from 'jquery'

export default function fetchUserId(){
  return function(dispatch){
    dispatch({type: 'FETCHING_USER'})
    $.ajax({
      url: "https://safe-escarpment-99271.herokuapp.com/users",
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      // NOTE: render json: {jwt: jwt, current_user: user, leaning_id: user.leaning.id}
      dispatch({type: 'FETCH_USER', payload: {currentUser: data.current_user, leaningId: data.leaning_id}})
    })
  }
}
