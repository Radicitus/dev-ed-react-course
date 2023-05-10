import { useState } from "react";
import PropTypes from "prop-types";

// Prop Types
Counter.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
};

function Counter({ message, setMessage }) {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    console.log(count);
    if (count + 1 > 4) {
      setMessage("Holy clicks!");
    }
    setCount(count + 1);
  };

  return (
    <>
      <h1>{message}</h1>
      <div>Current Count: {count}</div>
      <button onClick={countHandler}>Click Me!</button>
    </>
  );
}

export default Counter;
