import { LOAD_IDEAS, REMOVE_IDEA, UPDATE_IDEA } from '../actionTypes';
import { addError, removeError } from './errors';
import { addFlash, removeFlash } from './flash';
import { setLoadingState } from './loading';
import { apiCall } from '../../services/api';

const loadIdeas = ideas => ({
  type: LOAD_IDEAS,
  ideas
});

const remove = id => ({
  type: REMOVE_IDEA,
  id
});

const update = idea => ({
  type: UPDATE_IDEA,
  idea
});

export const fetchIdeas = () => dispatch => {
  dispatch(setLoadingState(true));
  return apiCall('get', '/api/ideas')
    .then(res => {
      dispatch(removeError());
      dispatch(loadIdeas(res));
    })
    .catch(err => {
      dispatch(addError(err.message));
    })
    .finally(() => dispatch(setLoadingState(false)));
};

export const addIdea = idea => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall('post', '/api/ideas', idea)
      .then(() => {
        dispatch(removeError());
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const removeIdea = id => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall('delete', `/api/ideas/${id}`)
      .then(() => {
        dispatch(removeError());
        dispatch(remove(id));
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
  });
};

export const updateIdea = (id, obj) => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall('put', `/api/ideas/${id}`, obj)
      .then(res => {
        dispatch(removeError());
        dispatch(update(res));
        dispatch(addFlash());
        setTimeout(() => {
          dispatch(removeFlash());
        }, 3000);
        resolve();
      })
      .catch(err => {
        dispatch(addError(err.message));
        reject();
      });
  });
};
