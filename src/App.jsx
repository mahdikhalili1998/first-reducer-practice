import { useEffect, useReducer } from "react";
const intialstate = {
  isloading: false,
  data: [],
  error: [],
};
const reducer = (state, action) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case "OK":
      return { data: action.payload, isloading: true, erroe: [] };
    case "LOST":
      return { data: [], isloading: true, error: action.payload };
    default:
      break;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, intialstate);
  console.log(state);
  useEffect(() => {
    fetch("https://jsosnplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "OK", payload: json }))
      .catch((error) => dispatch({ type: "LOST", payload: error.message }));
  }, []);
  return (
    <>
      {!state.isloading && <p>loading ...</p>}
      <div>
        {state.data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <p>{state.error}</p>
    </>
  );
}

export default App;
