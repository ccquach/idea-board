import { combineReducers } from 'redux';

import ideas from './ideas';
import errors from './errors';
import flash from './flash';

const rootReducer = combineReducers({
  ideas,
  errors,
  flash
});

export default rootReducer;
