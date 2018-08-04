import { SET_SORT_ORDER } from '../actionTypes';

const DEFAULT_STATE = { sortObj: { updatedAt: 'desc' } };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return { ...state, sortObj: action.obj };
    default:
      return state;
  }
};
