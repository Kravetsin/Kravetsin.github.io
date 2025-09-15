export const Button = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", e.currentTarget);
  };

  return <button onClick={handleClick}>Click me</button>;
};
