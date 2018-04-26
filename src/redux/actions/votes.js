export const UP_VOTE_SUCCESS = 'UP_VOTE_SUCCESS'
export const UP_VOTE_FAILED = 'UP_VOTE_FAILED'

export const DOWN_VOTE_SUCCESS = 'DOWN_VOTE_SUCCESS'
export const DOWN_VOTE_FAILED = 'DOWN_VOTE_FAILED'

const BASE_URL = 'http://localhost:8082/api'
export const upVote = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/increase/${id}`)
      let post = await response.json()
      console.log(post)
      dispatch({
        type: UP_VOTE_SUCCESS,
        payload: posts
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: UP_VOTE_FAILED,
        payload: err
      })
    }
  }
}

export const downVote = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/decrease/${id}`)
      let post = await response.json()
      console.log(post)
      dispatch({
        type: DOWN_VOTE_SUCCESS,
        payload: posts
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: DOWN_VOTE_FAILED,
        payload: err
      })
    }
  }
}
