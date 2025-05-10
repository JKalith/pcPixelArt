
    import styles from "../css/calculator.module.css";
    import React, { useState, useRef, useEffect, useMemo } from "react";
function Calculator({ closeCalculator }) {

  const [txt, setTxt] = useState("Algo de texto");

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useMemo(() => {
    console.log('Calculando suma...');
    return a + b;
  }, [a, b]);
  
  return (
    <div className={styles.allScreen}>
      
      <p>Texto: {txt}</p>
      <p>a: {a}</p>
        <button className={styles.closeButton} onClick={closeCalculator}>
          ✖
        </button>
        
      <p>b: {b}</p>
      <p>sum: {sum}</p>
      <button onClick={() => setTxt("Nuevo Texto!")}>Escribir Texto</button>
      <button onClick={() => setA(a + 1)}>Incrementar a</button>
      <button onClick={() => setB(b + 1)}>Incrementar b</button>
    </div>
  );
}

export default Calculator;
