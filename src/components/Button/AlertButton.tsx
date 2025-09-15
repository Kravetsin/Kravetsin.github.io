interface AlertButtonProps {
  message: string;
}

export const AlertButton = ({ message }: AlertButtonProps) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>Click me</button>;
};
