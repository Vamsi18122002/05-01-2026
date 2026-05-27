import React, { useState, useMemo, useCallback } from "react";
const ProductCard = React.memo(({ product, addToCart }) => {
  console.log("Rendering Product:", product.name);
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <h4>{product.name}</h4>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
});

const CartItem = React.memo(({ item, removeFromCart }) => {
  console.log("Rendering Cart Item:", item.name);

  return (
    <li>
      {item.name} - ${item.price}
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
});
const productsData = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1000 },
  { id: 3, name: "Shoes", price: 100 },
];
export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);
  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);
  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart} 
        />
      ))}
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart} 
          />
        ))}
      </ul>

      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}