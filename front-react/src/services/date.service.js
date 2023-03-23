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
  const isMonthandYearNow =
    parseInt(generateDate().substring(3, 5)) ===
      parseInt(date.substring(3, 5)) &&
    parseInt(generateDate().substring(6)) === parseInt(date.substring(6));

  return dayNow === day && isMonthandYearNow
    ? "Aujourd'hui"
    : dayNow - 1 === day && isMonthandYearNow
    ? "Hier"
    : date;
};
