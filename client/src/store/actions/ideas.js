import { LOAD_IDEAS } from '../actionTypes';
import { addError } from './errors';
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
