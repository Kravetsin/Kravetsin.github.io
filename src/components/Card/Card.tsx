interface CardProps {
  title: string;
  children: React.ReactNode; // стандартный тип для children
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
