import { LOAD_IDEAS } from '../actionTypes';
import { addError, removeError } from './errors';
import { apiCall } from '../../services/api';

const loadIdeas = ideas => ({
  type: LOAD_IDEAS,
  ideas
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
