import styles from "../css/browser.module.css";
import React, { useState, useRef, useEffect, useMemo } from "react";
import PagePc from "../components/pagePc";

function Browser({ }) {
  const [isVisible, setIsVisible] = useState(false);

  const openWindow = () => setIsVisible(true);
  const closeWindow = () => setIsVisible(false);

  return (
    <div className={styles.containerBrowser}>
   

    

      {isVisible && <PagePc closeWindow={closeWindow} />}
      <button className={styles.buttomOn} onClick={openWindow}>
        Navegador
      </button>
    </div>
    
  );
}

export default Browser;
