const calculation = () => {
  let a = 0;
  const tong = (a, b) => {
    return a + b;
  };

  const hieu = (a, b) => {
    return a - b;
  };
  return {
    a,
    tong,
    hieu,
  };
};
export default calculation;
