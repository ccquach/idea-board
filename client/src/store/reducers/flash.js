import * as actionTypes from '../actionTypes';

export default (state = { message: null }, action) => {
  switch (action.type) {
    case actionTypes.ADD_FLASH:
      return { ...state, message: 'All changes saved' };
    case actionTypes.REMOVE_FLASH:
      return { ...state, message: null };
    default:
      return state;
  }
};
