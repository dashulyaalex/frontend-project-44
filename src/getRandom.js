const getRandomInterger = (min, max) => {
  const randomInterger = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInterger;
};

export default getRandomInterger;
