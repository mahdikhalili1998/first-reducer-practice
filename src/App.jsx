import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "reset":
      return (state = 0);
    case "decrease":
      return state - 1;

    default:
      console.log("error darim dadash");
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const increase = () => {
    dispatch("increase");
  };
  const reset = () => {
    dispatch("reset");
  };
  const decrease = () => {
    dispatch("decrease");
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export default App;
