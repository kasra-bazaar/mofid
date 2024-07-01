export const getAbbr = (str = "") =>
  str
    .match(/\b([A-Za-z0-9])/g)
    ?.join("")
    .toUpperCase();
