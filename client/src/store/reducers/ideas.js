import { LOAD_IDEAS } from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_IDEAS:
      return [...action.ideas];
    default:
      return state;
  }
};
