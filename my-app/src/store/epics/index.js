import {combineEpics} from 'redux-observable';

import home from './home';

export const rootEpic = combineEpics(
  home
);
