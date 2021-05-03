import {
    CHANGE_SEARCHFIELD,
    REQUEST_PLAYERS_PENDING,
    REQUEST_PLAYERS_SUCCESS,
    REQUEST_PLAYERS_FAILED
   } from './constants';
  
  const initialStateSearch = {
    searchField: ''
  }
  
  export const searchPlayers = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return Object.assign({},state, {searchField: action.payload}) //no spread operator?
      default:
        return state
    }
  }
  
  const initialStatePlayers = {
    players: [],
    isPending: true
  }
  
  export const requestPlayers = (state=initialStatePlayers, action={}) => {
    switch (action.type) {
      case REQUEST_PLAYERS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_PLAYERS_SUCCESS:
        return Object.assign({}, state, {players: action.payload.data, isPending: false})
      case REQUEST_PLAYERS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }
 