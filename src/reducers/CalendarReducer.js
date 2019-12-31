export function calendarReducer(state, action){
  switch(action.type){
    case "initCal":
      return {...state, days: []}
  }
}


import { SEARCHES_LOADING, ADD_SEARCH_TERM, ADD_FILTER_TAGS  } from '../actions/searchActions'


export const SEARCHES_LOADING = 'SEARCHES_LOADING'
export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM'
export const ADD_FILTER_TAGS = 'ADD_FILTER_TAGS'
