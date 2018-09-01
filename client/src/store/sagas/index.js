import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import { fetchQuoteSaga } from './quote';
import {
  fetchIdeasSaga,
  addIdeaSaga,
  removeIdeaSaga,
  updateIdeaSaga,
} from './ideas';

// quote
const watchQuote = [takeEvery(actionTypes.FETCH_QUOTE, fetchQuoteSaga)];

// ideas
const watchIdeas = [
  takeEvery(actionTypes.FETCH_IDEAS, fetchIdeasSaga),
  takeEvery(actionTypes.ADD_IDEA, addIdeaSaga),
  takeEvery(actionTypes.REMOVE_IDEA_START, removeIdeaSaga),
  takeEvery(actionTypes.UPDATE_IDEA_START, updateIdeaSaga),
];

export default function* watchAll() {
  yield all([...watchQuote, ...watchIdeas]);
}
