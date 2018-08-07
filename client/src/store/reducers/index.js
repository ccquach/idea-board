import { combineReducers } from 'redux';

import ideas from './ideas';
import errors from './errors';
import flash from './flash';
import utils from './utils';
import loading from './loading';
import quote from './quote';

const rootReducer = combineReducers({
  ideas,
  errors,
  flash,
  utils,
  loading,
  quote
});

export default rootReducer;
