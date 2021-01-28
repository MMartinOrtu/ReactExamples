import React, { useContext } from "react";
import { CounterContext } from "../Context/context";

export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h5>Count: {state.count}</h5>
      {/* TODO: Increment */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {/* TODO: Decrement */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
