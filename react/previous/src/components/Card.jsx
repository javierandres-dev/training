export const Card = ({ item, addToCart }) => {
  const { image, name, price } = item;

  return (
    <div className='card'>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <div>U$D{price}</div>
      <button onClick={() => addToCart(item)}>Add</button>
    </div>
  );
};
