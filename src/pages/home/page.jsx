import React, { useState, useRef, useEffect } from "react";
import styles from "../../css/home.module.css";
import globals from "../../css/globals.module.css";
import FloatingWindow from "../../components/floatDiv";
import Clock from "../../api/clock";
import Browser from "../../components/browser"
import Calculator from "../../components/calculator";
function Home() {
  const screenRef = useRef(null); // Ref para el contenedor que contiene la ventana
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad de la ventana
  const [calcIsVisible, setIsCalcVisible] = useState(false); // Estado para controlar la visibilidad de la ventana

  // Función para abrir la ventana
  const openWindow = () => setIsVisible(true);
  const openCalculator = () => setIsCalcVisible(true);

  // con esto cierro la ventana
  const closeWindow = () => setIsVisible(false);
  const closeCalculator = () => setIsCalcVisible(false);

  return (
    <div>
      <div className={globals.containerMain}>
        <div className={styles.frameMonitor}>
          <div className={styles.innerFrameMonitor}>
            <div ref={screenRef} className={styles.screenContainer}>
              
              <Browser/>
         
      <Clock/>









              <button className={styles.buttomOn} onClick={openCalculator}>
                Open Calculator
              </button>


              {calcIsVisible && (
                <Calculator closeCalculator={closeCalculator} />
              )}


              <button className={styles.buttomOn} onClick={openWindow}>
                Open Window
              </button>

              {isVisible && (
                <FloatingWindow
                  containerRef={screenRef}
                  closeWindow={closeWindow}
                />
              )}
            </div>
          </div>
          <div className={styles.frameButtomMonitor}>
            <button className={styles.buttomOn}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
