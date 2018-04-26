import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  INCREASE_VOTES_SUCCESS,
  INCREASE_VOTES_FAILED,
  DECREASE_VOTES_SUCCESS,
  DECREASE_VOTES_FAILED
} from '../actions/posts'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return [...payload]
    case FETCH_POSTS_FAILED:
      return payload
    case CREATE_POST_SUCCESS:
      return [...state, payload]
    case CREATE_POST_FAILED:
      return payload
    case INCREASE_VOTES_SUCCESS:
      let filteredState = state.filter(post => post.id !== payload.id)
      return [...filteredState, payload].sort((a, b) => b.votes - a.votes)
    case INCREASE_VOTES_FAILED:
      return payload
    case DECREASE_VOTES_SUCCESS:
      let filteredState2 = state.filter(post => post.id !== payload.id)
      return [...filteredState2, payload].sort((a, b) => b.votes - a.votes)
    case DECREASE_VOTES_FAILED:
      return payload
    default:
      return state
  }
}
