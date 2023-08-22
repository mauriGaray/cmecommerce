import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ stock, onAdd }) => {
  const { count, decrement, increment } = useCount(stock);

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};
