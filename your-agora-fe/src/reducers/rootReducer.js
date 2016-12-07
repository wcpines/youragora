import { combineReducers } from 'redux'
import { browserHistory } from 'react-router'

function currentUser(state = {making_user: false, userId: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'FETCH_USER':
      return {...state, userId: action.currentUserId, userName: action.currentUserName}
    case 'LOGIN_USER':
      return {...state, making_user: false, userId: action.currentUser.user_id, userName: action.currentUser.user_name}
    case 'SIGN_OUT':
      return {making_user: false, userId: null}
    default:
      return state
  }
}

function articles(state = {fetched: [], fetching: false}, action){
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {...state, fetching: true}
    case 'FETCH_FIRST_ARTICLE':
      return {...state, fetched: action.payload}
    case "FETCH_ARTICLES":
      return {...state, fetched: [...state.fetched, ...action.payload], fetching: false}
    default:
      return state
  }
}

function stashes(state = [], action){
  switch (action.type) {
    case "STASH_ARTICLE":
      return state
    case "FETCH_STASHES":
      return state
    default:
      return state
  }
}

function mainArticle(state = {article: {title: "", content: ""}}, action ){
  switch (action.type) {
    case "FETCH_FIRST_ARTICLE":
      return action.payload[0]
    case "NEXT_ARTICLE":
      browserHistory.push(`/articles/random/teaser`)
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, currentUser, mainArticle, stashes })

export default rootReducer
