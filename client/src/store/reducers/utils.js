import { SET_SORT, SET_FILTER } from '../actionTypes';

const DEFAULT_STATE = {
  sort: { updatedAt: 'desc' },
  filter: { completed: false }
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.sort };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
