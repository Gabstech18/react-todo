import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase counter</button>

      <Card />
    </>
  );
};

export default App;
