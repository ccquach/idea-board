import { delay } from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { apiCall } from '../../services/api';
import * as actions from '../actions';

export function* fetchIdeasSaga() {
  yield put(actions.setLoadingState(true));
  try {
    const res = yield apiCall('get', '/api/ideas');
    yield all([
      put(actions.setLoadingState(false)),
      put(actions.loadIdeas(res)),
    ]);
  } catch (err) {
    yield all([
      put(actions.setLoadingState(false)),
      put(actions.addError(err.message)),
    ]);
  }
}

export function* addIdeaSaga(action) {
  try {
    yield apiCall('post', '/api/ideas', action.idea);
    yield all([put(actions.removeError()), put(actions.fetchIdeas())]);
  } catch (err) {
    yield put(actions.addError(err.message));
  }
}

export function* removeIdeaSaga(action) {
  try {
    yield apiCall('delete', `/api/ideas/${action.id}`);
    yield all([put(actions.removeError()), put(actions.remove(action.id))]);
  } catch (err) {
    yield put(actions.addError(err.message));
  }
}

export function* updateIdeaSaga(action) {
  try {
    const res = yield apiCall('put', `/api/ideas/${action.id}`, action.obj);
    yield all([
      put(actions.removeError()),
      put(actions.update(res)),
      put(actions.addFlash()),
    ]);
    yield delay(3000);
    yield put(actions.removeFlash());
  } catch (err) {
    yield all([put(actions.addError(err.message)), put(actions.fetchIdeas())]);
  }
}
