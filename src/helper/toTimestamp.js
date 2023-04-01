export const toTimestamp = (dateStr) => {
  const dataObj = Date.parse(dateStr);
  return dataObj / 1000;
};
