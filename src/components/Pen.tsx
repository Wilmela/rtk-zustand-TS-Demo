import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { orderPen, restockPen } from "../redux/slices/penSlice";
const Pen = () => {
  const [value, setValue] = useState<number>(1);

  const availablePens = useAppSelector((state) => state.pen.numberOfPen);
  const dispatch = useAppDispatch();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v: number = parseInt(e.target.value);
    if (v <= 0) {
      alert("Value can no be 0");
      setValue(1);
    }

    setValue(v);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Order and Restock Pen</h2>
      <h3>Number of Pen {availablePens}</h3>
      <button type="button" onClick={() => dispatch(orderPen(value))}>
        Order
      </button>
      <input
        placeholder="Enter number of books.."
        value={value}
        onChange={handleValue}
      />
      <button type="button" onClick={() => dispatch(restockPen(value))}>
        Restock
      </button>
    </div>
  );
};

export default Pen;
