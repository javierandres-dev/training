import { useEffect, useState } from 'react';
import { Card } from './Card';
import { Cart } from './Cart';

export const Cards = (props) => {
  const [cart, setCart] = useState([]);

  const items = props.catalog.map((item) => (
    <Card key={item.id} item={item} addToCart={addTocart} />
  ));

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem('myCart'));
    if (currentCart.length > 0) {
      setCart(currentCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);

  function addTocart(item) {
    setCart([...cart, item]);
  }

  return (
    <>
      <div className='subtitle'>Catalog</div>
      <Cart cart={cart} setCart={setCart} />
      <div className='cards'>{items}</div>
    </>
  );
};
