import { LOAD_IDEAS, REMOVE_IDEA } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_IDEAS:
      return [...action.ideas];
    case REMOVE_IDEA:
      return state.filter(i => i !== action.id);
    default:
      return state;
  }
};
