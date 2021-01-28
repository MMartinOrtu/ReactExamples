import React, { useContext } from "react";
import { CounterContext } from "../Context/context";
import Counter from "./Counter";

export default function SeparateComponent() {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h1>Shared Count: {state.count}</h1>
      {/* TODO: FETCH*/}
      <button onClick={() => {}}>Fetch Again</button>
    </div>
  );
}
