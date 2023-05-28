import { useState } from "react";

const useHook = () => {
  const [number, setNumber] = useState(1);
  const handleNext = () => {
    console.log(number);
    setNumber(number == 3 ? 1 : number + 1);
  };
  return { number, handleNext };
};

export default useHook;
