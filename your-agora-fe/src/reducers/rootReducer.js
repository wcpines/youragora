import { combineReducers } from 'redux'

function currentUser(state = {making_user: false, userId: null}, action){
  switch (action.type) {
    case 'MAKING_USER':
      return {...state, making_user: true}
    case 'FETCH_USER':
      return {...state, userId: action.payload.currentUser.id, userName: action.payload.currentUser.name, userEmail: action.payload.currentUser.email, leaningId: action.payload.leaningId}
    case 'SIGNIN_USER':
      return {userId: action.payload.currentUser.id, userName: action.payload.currentUser.name, userEmail: action.payload.currentUser.email, leaningId: action.payload.leaningId, making_user: false,}
    case 'SIGN_OUT':
      return {making_user: false, userId: null}
    default:
      return state
  }
}

function articles(state = {fetched: [], fetching: false, fetching_first_article: false}, action){
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {...state, fetching: true, fetching_first_article: true}
    case 'FETCH_FIRST_ARTICLE':
      return {...state, fetched: action.payload}
    case 'FETCHED_FIRST_ARTICLE':
      return {...state, fetching_first_article: false}
    case "FETCH_ARTICLES":
      return {...state, fetched: [...state.fetched, ...action.payload], fetching: false}
    default:
      return state
  }
}

function stashes(state = [], action){
  switch (action.type) {
    case "STASH_ARTICLE":
      return action.payload
    case "FETCH_STASHES":
      return action.payload
    case 'UNSTASH_ARTICLE':
      return action.payload
    default:
      return state
  }
}


//NOTE: mainArticle is an article object, whereas articles in fetched articles are each an object with one key of 'article' and a key of 'sourceName'
function mainArticle(state = {title: "", content: "", sourceName: "", stashState: false}, action ){
  switch (action.type) {
    case "FETCH_FIRST_ARTICLE":
      return Object.assign({}, action.payload[0], {stashState: false})
    case "NEXT_ARTICLE":
      return Object.assign({}, action.payload.article, {stashState: action.payload.stashState})
    case "STASH_ARTICLE":
      return {...state, stashState: true}
    case 'UNSTASH_ARTICLE':
      return {...state, stashState: false}
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, currentUser, mainArticle, stashes })

export default rootReducer
