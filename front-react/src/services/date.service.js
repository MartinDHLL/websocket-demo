export const generateDate = () => {
  return new Date().toLocaleDateString();
};

export const generateHours = () => {
  const date = new Date();
  return `${date.getHours()} H ${date.getMinutes()}`;
};

export const transformDate = (date) => {
  const dayNow = parseInt(generateDate().substring(0, 2));
  const day = parseInt(date.substring(0, 2));
  return dayNow === day ? "Aujourd'hui" : dayNow - 1 === day ? "Hier" : date;
};
