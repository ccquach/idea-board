import { LOAD_IDEAS, REMOVE_IDEA, UPDATE_IDEA } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_IDEAS:
      return [...action.ideas];
    case REMOVE_IDEA:
      return state.filter(i => i._id !== action.id);
    case UPDATE_IDEA:
      return state.map(
        i => (i._id === action.idea._id ? Object.assign({}, action.idea) : i)
      );
    default:
      return state;
  }
};
