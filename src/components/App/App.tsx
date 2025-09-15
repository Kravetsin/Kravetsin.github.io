import { AlertButton } from "../Button/AlertButton";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Container } from "../Container/Container";
import { Greeting } from "../Greeting/Greeting";
import { UserCard } from "../UserCard/UserCard";
import "./App.module.css";

function App() {
  return (
    <div>
      <Greeting name={"Kravets"} age={26} />
      <Card title="My Card">
        <p>This is inside the card.</p>
      </Card>
      <Button />
      <UserCard name={"Kravets"} age={26} />
      <Container>
        <div>
          <h2>Hello</h2>
        </div>
      </Container>
      <AlertButton message={'Hello'} />
    </div>
  );
}

export default App;
