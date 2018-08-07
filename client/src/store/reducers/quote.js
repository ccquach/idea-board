import { GET_QUOTE } from '../actionTypes';

const DEFAULT_STATE = {
  text: '',
  author: ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        text: action.quote.quote,
        author: action.quote.author
      };
    default:
      return state;
  }
};
