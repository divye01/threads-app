import {
  getReq
} from './backendUtils';

export function getPosts(payload) {
  return getReq('/', payload);
}