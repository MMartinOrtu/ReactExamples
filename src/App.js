import React from "react";
import Counter from "./Components/Counter";
import SeparateComponent from "./Components/SharedCount";
import { CounterProvider } from "./Context/context";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        {/* Con CounterProvider se consigue que todo lo que engloba esta etiqueta comparta los atributos. De ahi que se llame estado global*/}
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

export default App;
