const randomNumber = (maxValue = 100, minValue = 1) => {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

export default randomNumber;
