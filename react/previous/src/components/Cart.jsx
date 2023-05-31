export const Cart = ({
  totalItems,
  totalProducts,
  total,
  clearCart,
  handlePay,
}) => {
  return (
    <div className='cart'>
      <span>Items: {totalItems}</span>
      <span>Products: {totalProducts}</span>
      <span>Total: USD{total}</span>
      {!total <= 0 && (
        <>
          <button onClick={clearCart}>Clear cart</button>
          <button onClick={handlePay}>Pay</button>
        </>
      )}
    </div>
  );
};
