import {fromJS} from 'immutable';
import * as actionTypes from "../../lib/actionTypes";

const initialState = fromJS({
  isFetching: false,
  threads: []
});

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
      case actionTypes.GET_POSTS_REQUEST:
        return state.set('isFetching', true);
      
      case actionTypes.GET_POSTS_SUCCESS:
        if(payload) return state.set('threads', fromJS(payload));
        return state;

    default:
      return state;
  }
}
