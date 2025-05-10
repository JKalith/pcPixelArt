
import React, { useState } from "react";

function   ToDoList () {
   const [contador, setContador] = useState(0);
    const sumar = () => {
      setContador(contador + 1);
    };

    const restar = () => {
      setContador(contador - 1);
    };
    const reiniciar = () => {
      setContador((contador == 0));
    };

  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <p>Este es el contador {contador}</p>
          <button onClick={sumar}> summar </button>
          <button onClick={restar}> restar </button>
          <button onClick={reiniciar}>  reiniciar </button>
        </div>
      </header>
    </div>
  );
}

export default   ToDoList ;
