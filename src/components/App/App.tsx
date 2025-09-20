import "./App.module.css";
import "../../types/test";
import { useState } from "react";
import Accordion from "./Accordion";
import TagManager from "./TagManager";

const items = [
  {
    title: "Section 1",
    content:
      "Failed to reload /src/components/App/App.tsx. This could be due to syntax errors or importing non-existent modules.",
  },
  {
    title: "Section 2",
    content:
      "Failed to reload /src/components/App/App.tsx. This could be due to syntax errors or importing non-existent modules.",
  },
];

function App() {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [obj, setObj] = useState({ a: 1, b: 2, c: 3 });

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
    setObj({ ...obj, a: 2 });
  };

  return (
    <div>
      <TagManager />
      <Accordion items={items} />
      <button onClick={handleVisibility}>Set Visibility</button>
      {isVisible && <h1>State in React</h1>}
      <button onClick={handleClick}>Click</button>
      <p>{value}</p>
      <input
        className="outline-1"
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
