import styles from "../css/calculator.module.css";
import React, { useState, useRef, useEffect, useMemo } from "react";
import PagePc from "../components/pagePc";
function Browser({ }) {
  const [isVisible, setIsVisible] = useState(false);

  const openWindow = () => setIsVisible(true);
  const closeWindow = () => setIsVisible(false);

  return (
    <div >
      <button className={styles.buttomOn} onClick={openWindow}>
        Navegador
      </button>

    

      {isVisible && <PagePc closeWindow={closeWindow} />}
    </div>
  );
}

export default Browser;
