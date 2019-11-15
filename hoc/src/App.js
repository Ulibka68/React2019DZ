import React from 'react';
import fnc from "./hoc";

const Hja = fnc();

function App() {
  return (
    <div className="App">
      <h1>Вася</h1>  
      <Hja />
    </div>
  );
}

export default App;
