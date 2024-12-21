import React from "react";

export default function ItemCount({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="quantity-container d-flex align-items-center">
      <button
        className="btn btn-outline-secondary btn-sm me-2"
        onClick={onDecrement}
      >
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        className="btn btn-outline-secondary btn-sm me-3"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}
