import { SET_SORT, SET_FILTER } from '../actionTypes';

export const setSort = sort => ({
  type: SET_SORT,
  sort
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
