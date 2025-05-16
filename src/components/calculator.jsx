import styles from "../css/calculator.module.css";
import React, { useState } from "react";

export default function Calculator({ closeCalculator }) {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => setInput("");
  const calculate = () => {
    try {
      // Reemplazar símbolos para que JS los entienda
      const result = eval(input.replace(/×/g, "*").replace(/÷/g, "/"));
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <button className={styles.closeButton} onClick={closeCalculator}>✖</button>
      <div className={styles.display}>{input || "0"}</div>
      <div className={styles.keypad}>
        {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            className={styles.button}
            onClick={() => {
              if (btn === "=") calculate();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button className={`${styles.button} ${styles.clear}`} onClick={clear}>C</button>
      </div>
    </div>
  );
}
