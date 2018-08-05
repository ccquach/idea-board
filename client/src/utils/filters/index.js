export const getFilteredData = (ideas, filter) => {
  return ideas.filter(i => i.completed === filter);
};
