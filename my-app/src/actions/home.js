import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS
} from "../lib/actionTypes";

export function getPostsRequest(obj) {
  return { type: GET_POSTS_REQUEST }
}

export function getPostsSuccess(obj) {
  return { type: GET_POSTS_SUCCESS, payload: obj }
}

export function getPostsFailure(obj) {
  return { type: GET_POSTS_FAILURE, payload: obj }
}
