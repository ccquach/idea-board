import * as actionTypes from '../actionTypes';

export const setSort = sort => ({
  type: actionTypes.SET_SORT,
  sort,
});

export const setFilter = filter => ({
  type: actionTypes.SET_FILTER,
  filter,
});
