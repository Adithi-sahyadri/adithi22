

import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

