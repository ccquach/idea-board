import * as actionTypes from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_IDEAS:
      return [...action.ideas];
    case actionTypes.REMOVE_IDEA:
      return state.filter(i => i._id !== action.id);
    case actionTypes.UPDATE_IDEA:
      return state.map(
        i => (i._id === action.idea._id ? Object.assign({}, action.idea) : i)
      );
    default:
      return state;
  }
};
