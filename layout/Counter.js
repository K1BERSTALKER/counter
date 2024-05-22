"use client";
import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SlotCounter from "react-slot-counter";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="h-[70vh] flex justify-center items-center flex-col">
      {loading ? (
        <div className="animate-pulse">
          <div className="bg-gray-300 w-[300px] h-[200px] mb-4 mx-auto rounded-md"></div>
          <div className="flex justify-between items-center w-[300px]">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="w-24 h-10 rounded-md bg-gray-50" />
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div>
            <SlotCounter
              value={count}
              startValue={0}
              sequentialAnimationMode={true}
              valueClassName="text-[200px] text-gray-500"
              separatorClassName="text-[200px] text-gray-500"
              charClassName="text-[200px] text-gray-500"
            />
          </div>
          <div className="flex justify-between items-center w-[300px]">
            <button
              className="w-10 h-10 rounded-full bg-gray-400 text-3xl font-bold grid place-items-center"
              onClick={decrement}
            >
              <FaMinus />
            </button>
            <button
              className="p-2 rounded-md bg-gray-500 text-3xl"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-400 text-3xl font-bold grid place-items-center"
              onClick={increment}
            >
              <FaPlus />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
