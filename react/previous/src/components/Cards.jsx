import { useEffect, useState } from 'react';
import { Card } from './Card';
import { Cart } from './Cart';

export const Cards = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(null);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem('myCart'));
    if (currentCart && currentCart.length > 0) {
      setCart(currentCart);
    }
    const currentProducts = JSON.parse(localStorage.getItem('myProducts'));
    if (currentProducts && currentProducts.length > 0) {
      setProducts([...currentProducts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('myProducts', JSON.stringify(products));
    getTotal();
  }, [products]);

  function addTocart(item) {
    setCart([...cart, item]);
    updateProducts(item);
  }

  function clearCart() {
    setCart([]);
    setProducts([]);
    setTotal(0);
    setPay(null);
  }

  function updateProducts(product) {
    if (products.length === 0) {
      const firstProduct = { ...product, quantity: 1 };
      setProducts([...products, firstProduct]);
    } else {
      const index = products.findIndex((p) => p.id === product.id);
      if (index === -1) {
        const newProduct = { ...product, quantity: 1 };
        setProducts([...products, newProduct]);
      } else {
        let arr = [...products];
        const updateProduct = products[index];
        updateProduct.quantity += 1;
        arr.splice(index, 1, updateProduct);
        setProducts([...arr]);
      }
    }
  }

  function getTotal() {
    let sum = 0;
    for (const i in products) {
      const product = products[i];
      sum += product.price * product.quantity;
    }
    setTotal(sum);
  }

  function handlePay() {
    if (products.length === 0) {
      alert('Empty cart');
    } else {
      const items = products.map((item) => (
        <div key={item.id}>
          {item.name} USD{item.price} x {item.quantity} = USD
          {item.price * item.quantity}
        </div>
      ));

      const thanks = (
        <div className='pay'>
          <button onClick={() => setPay(null)}>Close</button>
          <div className='subtitle'>Tanks!</div>
        </div>
      );

      const details = (
        <div className='pay'>
          <div className='subtitle'>Pay</div>
          {items}
          <div>Items: {cart.length}</div>
          <div>Products: {products.length}</div>
          <div>
            <strong>Total: USD{total}</strong>
          </div>
          <button onClick={clearCart}>Cancel and clear cart</button>
          <button onClick={() => setPay(null)}>Cancel</button>
          <button
            onClick={() => {
              setCart([]);
              setProducts([]);
              setTotal(0);
              setPay(thanks);
            }}
          >
            Pay
          </button>
        </div>
      );
      setPay(details);
    }
  }

  const items = props.catalog.map((item) => (
    <Card key={item.id} item={item} addToCart={addTocart} />
  ));

  return (
    <>
      {pay && <div className='pay-container'>{pay}</div>}
      <div className='subtitle'>Catalog</div>
      <Cart
        totalItems={cart.length}
        totalProducts={products.length}
        total={total}
        clearCart={clearCart}
        handlePay={handlePay}
      />
      <div className='cards'>{items}</div>
    </>
  );
};
