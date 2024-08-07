// src/ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="shopping-cart">
      <h1><i className="fas fa-shopping-cart"></i>Shopping Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="removecart" onClick={() => onRemoveFromCart(product.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default ShoppingCart;