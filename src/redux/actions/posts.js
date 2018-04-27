export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const INCREASE_VOTES_SUCCESS = 'INCREASE_VOTES_SUCCESS'
export const INCREASE_VOTES_FAILED = 'INCREASE_VOTES_FAILED'

export const DECREASE_VOTES_SUCCESS = 'DECREASE_VOTES_SUCCESS'
export const DECREASE_VOTES_FAILED = 'DECREASE_VOTES_FAILED'

export const FILTER_POST_TITLE = 'FILTER_POST_TITLE'

const BASE_URL = 'http://localhost:8082/api'
export const fetchPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`)
      let posts = await response.json()
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })
    }
  }
}

export const createPost = newPost => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' }
      })
      let post = await response.json()
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: post
      })
      console.log(post)
    } catch (err) {
      dispatch({
        type: CREATE_POST_FAILED,
        payload: err
      })
      console.log(err)
    }
  }
}

export const increaseVotes = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/increase/${id}`)
      let post = await response.json()
      console.log(post)
      dispatch({
        type: INCREASE_VOTES_SUCCESS,
        payload: post
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: INCREASE_VOTES_FAILED,
        payload: err
      })
    }
  }
}

export const decreaseVotes = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/decrease/${id}`)
      let post = await response.json()
      console.log(post)
      dispatch({
        type: DECREASE_VOTES_SUCCESS,
        payload: post
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: DECREASE_VOTES_FAILED,
        payload: err
      })
    }
  }
}

export const filterPosts = str => {
  return dispatch => {
    dispatch({
      type: FILTER_POST_TITLE,
      payload: str
    })
  }
}
