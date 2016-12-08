import $ from 'jquery'

export default function fetchUserId(){
  return function(dispatch){
    dispatch({type: 'FETCHING_USER'})
    $.ajax({
      url: "http://localhost:3000/users",
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      // NOTE: current_user is from UsersController; render json: @user
      dispatch({type: 'FETCH_USER', currentUser: data}) 
    })
  }
}
