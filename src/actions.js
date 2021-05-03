import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_PLAYERS_PENDING,
  REQUEST_PLAYERS_SUCCESS,
  REQUEST_PLAYERS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestPlayers = () => (dispatch) => {
  dispatch({ type: REQUEST_PLAYERS_PENDING })
  apiCall('https://balldontlie.io/api/v1/players')/////////
  .then(res=> console.log(res))
    .then(data => dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_PLAYERS_FAILED, payload: error }))
}

