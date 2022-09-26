const isPrime = (num) => {
  let result;
  if (num < 2) {
    result = false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if ((num % i) === 0) {
      result = false;
      break;
    }
    result = true;
  }
  return result;
};

export default isPrime;
