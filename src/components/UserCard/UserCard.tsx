interface UserCardProps {
  name: string;
  age: number;
}

export const UserCard = ({ name, age }: UserCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
};
