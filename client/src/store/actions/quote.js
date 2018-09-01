import * as actionTypes from '../actionTypes';

export const setQuote = quote => ({
  type: actionTypes.SET_QUOTE,
  quote,
});

export const fetchQuote = () => ({
  type: actionTypes.FETCH_QUOTE,
});
