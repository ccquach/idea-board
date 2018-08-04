import { combineReducers } from 'redux';

import ideas from './ideas';
import errors from './errors';
import flash from './flash';
import sort from './sort';

const rootReducer = combineReducers({
  ideas,
  errors,
  flash,
  sort
});

export default rootReducer;
