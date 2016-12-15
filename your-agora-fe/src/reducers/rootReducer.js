import { combineReducers } from 'redux'

// TBD: In general I think we're mixing in snake case where it should probably be
// camelCase.  Curse of doing rails/js at the same time? :/ -- CP

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

// TODO: Why is fetching_first_article in snake_case?   -- CP
// TODO: Why is the naming sceme FETCHING_ARTICLES/FETCH_ARTICLES,
// but FETCH_FIRST_ARTICLE/FETCHED_FIRST_ARTICLE for the other one? --CP
function articles(state = {fetched: [], fetching: false, fetching_first_article: false}, action){
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {...state, fetching: true, fetching_first_article: true}
    case 'FETCH_FIRST_ARTICLE':
      return {...state, fetched: action.payload}
    case 'FETCHED_FIRST_ARTICLE':
      return {...state, fetching_first_article: false}
    case "FETCH_ARTICLES":
      // Filters duplicates being returned before updating the state because
      // fetch_first_articles may return the same source, therefore same articles as create
      let ids = state.fetched.map((article)=> article.id )
      articles = action.payload.filter((article)=>{
        return !ids.includes(article.id)
      })
      return {...state, fetched: [...state.fetched, ...articles], fetching: false}
    default:
      return state
  }
}

//stashes are an object with the keys of 'article' (points to an article object) and 'id' (points to the stash id)
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

function reactions(state = {fetched_reactions: [], fetching_reactions: false}, action){
  switch (action.type) {
    case 'FETCHING_REACTIONS':
      return {...state, fetching_reactions: true, }
    case "FETCH_REACTIONS":
      return {...state, fetched_reactions: action.payload, fetching_reactions: false}
    default:
      return state
  }
}


function mainArticle(state = {title: "", content: "", sourceName: "", stashState: false}, action ){
  switch (action.type) {
    case "FETCH_FIRST_ARTICLE":
      return Object.assign({}, action.payload[0], {stashState: false})
    case "NEXT_ARTICLE":
      return Object.assign({}, action.payload.article, {stashState: action.payload.stashState})
    case 'READ_STASHED_ARTICLE':
      return Object.assign({}, action.payload.article, {stashState: action.payload.stashState})
    case "STASH_ARTICLE":
      return {...state, stashState: true}
    case 'UNSTASH_ARTICLE':
      return {...state, stashState: false}
    default:
      return state
  }
}

function errorMessage(state = "", action){
  switch (action.type){
    case "ERROR_MESSAGE":
      return action.payload
    case "RESET_ERROR_MESSAGE":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({ articles, currentUser, mainArticle, stashes, reactions, errorMessage })

export default rootReducer
