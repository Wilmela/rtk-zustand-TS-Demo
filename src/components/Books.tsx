import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { orderBooks, restockBooks } from "../redux/slices/bookSlice";
const Books = () => {
  const [value, setValue] = useState<number>(1);

  const availableBooks = useAppSelector((state) => state.books.numberOfBooks);
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
    <div>
      <h2>Order and Restock books</h2>
      <h3>Number of Books {availableBooks}</h3>
      <button type="button" onClick={() => dispatch(orderBooks(value))}>
        Order
      </button>
      <input
        placeholder="Enter number of books.."
        value={value}
        onChange={handleValue}
      />
      <button type="button" onClick={() => dispatch(restockBooks(value))}>
        Restock
      </button>
    </div>
  );
};

export default Books;
