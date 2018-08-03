import { LOAD_IDEAS, REMOVE_IDEA } from '../actionTypes';
import { addError, removeError } from './errors';
import { apiCall } from '../../services/api';

const loadIdeas = ideas => ({
  type: LOAD_IDEAS,
  ideas
});

const remove = id => ({
  type: REMOVE_IDEA,
  id
});

export const fetchIdeas = () => dispatch => {
  return apiCall('get', '/api/ideas')
    .then(res => dispatch(loadIdeas(res)))
    .catch(err => dispatch(addError(err.message)));
};

export const addIdea = idea => dispatch => {
  return new Promise((resolve, reject) => {
    return apiCall('post', '/api/ideas', idea)
      .then(res => {
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
