import { put } from 'redux-saga/effects';

import { apiCall } from '../../services/api';
import * as actions from '../actions';

const API_URL = 'http://quotes.rest/qod.json?category=inspire';

export function* fetchQuoteSaga() {
  try {
    const res = yield apiCall('get', API_URL);
    yield put(actions.setQuote(res.contents.quotes[0]));
  } catch (err) {
    return;
  }
}
