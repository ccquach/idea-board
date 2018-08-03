import { ADD_FLASH, REMOVE_FLASH } from '../actionTypes';

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_FLASH:
      return { ...state, message: 'All changes saved' };
    case REMOVE_FLASH:
      return { ...state, message: null };
    default:
      return state;
  }
};
