import { combineReducers } from 'redux'
import posts from '../reducers/posts'
import comments from '../reducers/comments'
import filter from '../reducers/filter'

export default combineReducers({ posts, comments, filter })
