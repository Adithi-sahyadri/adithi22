// ShoppingCart.js
import React from 'react';

function ShoppingCart({ cartItems, updateQuantity, removeItem, proceedToCheckout }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>Price: ${item.price}</span>
          <span>Quantity: 
            <input 
              type="number" 
              value={item.quantity} 
              min="1" 
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))} 
            />
          </span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default ShoppingCart;
