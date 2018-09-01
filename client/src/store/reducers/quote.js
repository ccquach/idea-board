import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  text: 'Unable to retrieve quote of the day.',
  author: 'Anonymous',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_QUOTE:
      return {
        ...state,
        text: action.quote.quote,
        author: action.quote.author,
      };
    default:
      return state;
  }
};
