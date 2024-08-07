// src/ProductCatalog.js
import React from 'react';
import products from './products.json';
import ShoppingCart from './ShoppingCart';

const ProductCatalog = () => {
  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {

    setCart(cart.filter((product) => product.id!== productId));

  };


  return (
    <div className="product-catalog">
      <h1>Product Catalog</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ProductCatalog;