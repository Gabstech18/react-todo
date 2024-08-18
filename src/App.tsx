import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
  setCount(count + 1);
}
  return (
    <>
      <p>{count}</p>
      <button onClick={handleCounter}>Increase counter</button>

      <Card />
    </>
  );
};

export default App;
