import { useState } from "react";

const useCount = (stock, minimo = 1) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > minimo) setCount(count - 1);
  };

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  return { count, decrement, increment };
};
export default useCount;
