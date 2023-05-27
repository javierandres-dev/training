export const Greet = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return <div>Hello, {token.name}! </div>;
};
