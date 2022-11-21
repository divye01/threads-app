import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {getPosts} from '../../lib/backend.js';
import * as actionTypes from "../../lib/actionTypes";

const getPostsSuccess = (payload) => ({payload, type: actionTypes.GET_POSTS_SUCCESS});
const getPostsFailure = (payload) => ({payload, type: actionTypes.GET_POSTS_FAILURE});
const getPostsRequest = (action$, state$) => action$.pipe(
  ofType(actionTypes.GET_POSTS_REQUEST),
  mergeMap((action) => {
    return getPosts(action.payload).pipe(
      map(response =>  {
        return getPostsSuccess(response);
      }),
      catchError(error => of(getPostsFailure(error)))
    )
  })
);

export default combineEpics(
  getPostsRequest
);
