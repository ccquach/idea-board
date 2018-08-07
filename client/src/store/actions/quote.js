import { GET_QUOTE } from '../actionTypes';
import { apiCall } from '../../services/api';

const API_URL = 'http://quotes.rest/qod.json?category=inspire';

const getQuote = quote => ({
  type: GET_QUOTE,
  quote
});

export const fetchQuote = () => dispatch => {
  return apiCall('get', API_URL)
    .then(res => dispatch(getQuote(res.contents.quotes[0])))
    .catch(err => {});
};
