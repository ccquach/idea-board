import * as actionTypes from '../actionTypes';

export const loadIdeas = ideas => ({
  type: actionTypes.LOAD_IDEAS,
  ideas,
});

export const remove = id => ({
  type: actionTypes.REMOVE_IDEA,
  id,
});

export const update = idea => ({
  type: actionTypes.UPDATE_IDEA,
  idea,
});

export const fetchIdeas = () => ({
  type: actionTypes.FETCH_IDEAS,
});

export const addIdea = idea => ({
  type: actionTypes.ADD_IDEA,
  idea,
});

export const removeIdea = id => ({
  type: actionTypes.REMOVE_IDEA_START,
  id,
});

export const updateIdea = (id, obj) => ({
  type: actionTypes.UPDATE_IDEA_START,
  id,
  obj,
});
