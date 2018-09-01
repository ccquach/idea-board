import * as actionTypes from '../actionTypes';

export const setLoadingState = isFetching => ({
  type: actionTypes.SET_LOADING_STATE,
  isFetching,
});
