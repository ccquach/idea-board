import { combineReducers } from 'redux';

import ideas from './ideas';
import errors from './errors';
import flash from './flash';
import utils from './utils';

const rootReducer = combineReducers({
  ideas,
  errors,
  flash,
  utils
});

export default rootReducer;
