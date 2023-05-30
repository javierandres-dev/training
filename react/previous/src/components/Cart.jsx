import { useEffect, useState } from 'react';

export const Cart = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts();
  }, [cart]);

  useEffect(() => {
    getTotal();
  }, [products]);

  useEffect(() => {
    if (product !== null) {
      updateProducts();
    }
  }, [product]);

  function getProducts() {
    cart.forEach((el) => {
      const index = products.findIndex((p) => p.id === el.id);
      if (index === -1) {
        const newProduct = { ...el, quantity: 1 };
        setProducts([...products, newProduct]);
      } else {
        setProduct(index);
      }
    });
  }

  function updateProducts() {
    let arr = [...products];
    const el = products[product];
    el.quantity += 1;
    arr.splice(product, 1, el);
    setProduct(null);
    setProducts([...arr]);
  }

  function getTotal() {
    let sum = 0;
    for (const i in products) {
      const p = products[i];
      sum += p.price * p.quantity;
    }
    setTotal(sum);
  }

  function handleClearCart() {
    setCart([]);
    setProducts([]);
    setTotal(0);
  }

  return (
    <div className='cart'>
      <div>Cart items: {cart.length}</div>
      <div>Products: {products.length}</div>
      <div>Total: U$D{total}</div>
      <button onClick={handleClearCart}>Clear cart</button>
    </div>
  );
};
