import { combineReducers } from 'redux';

import ideas from './ideas';
import errors from './errors';

const rootReducer = combineReducers({
  ideas,
  errors
});

export default rootReducer;
