import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
  };

  //timer function
  useEffect(function() {
    var timer = setInterval(function() {
      setCount(count + 1);
      console.log("count =", count);
    }, 1000); // If a function is returned by useEffect(),
    // it allows performing a treatment
    // before each component update
    return function() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <p>{count}</p>
      <button onClick={handleCounter}>Increase counter</button>

      <Card />
    </>
  );
};

export default App;
