import { FILTER_POST_TITLE } from '../actions/posts'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_POST_TITLE:
      return payload
    default:
      return state
  }
}
