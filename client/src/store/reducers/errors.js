import * as actionTypes from '../actionTypes';

export default (state = { message: null }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ERROR:
      return { ...state, message: action.error };
    case actionTypes.REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};
