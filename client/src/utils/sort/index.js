export const getSortedData = (ideas, sortObj) => {
  const copy = [...ideas];
  const type = Object.keys(sortObj)[0];
  const order = sortObj[type];

  if (type === 'updatedAt') {
    return copy.sort(
      (a, b) =>
        order === 'asc'
          ? new Date(a[type]) - new Date(b[type])
          : new Date(b[type]) - new Date(a[type])
    );
  }
  return copy.sort(
    (a, b) => (order === 'asc' ? a[type] - b[type] : b[type] - a[type])
  );
};
