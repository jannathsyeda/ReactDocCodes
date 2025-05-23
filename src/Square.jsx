import React from "react";

export default function Square({ value, onClickHandler }) {
  return (
    <div>
      <button
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
        onClick={onClickHandler}
      >
        {value}
      </button>
    </div>
  );
}
