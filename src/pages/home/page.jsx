import React, { useState, useRef } from "react";
import styles from "../../css/home.module.css";
import globals from "../../css/globals.module.css";

import FloatingWindow from "../../components/floatDiv";
import Clock from "../../api/clock";
import PagePc from "../../components/pagePc";

import Calculator from "../../components/calculator";

function Home() {
  const screenRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [calcIsVisible, setIsCalcVisible] = useState(false);
 const [pagePcVisible, setPagePcVisible] = useState(false);
  const openWindow = () => setIsVisible(true);
  const closeWindow = () => setIsVisible(false);

  const openCalculator = () => setIsCalcVisible(true);
  const closeCalculator = () => setIsCalcVisible(false);

  const openPagePc = () => setPagePcVisible(true);
  const closePagePc = () => setPagePcVisible(false);

  return (
    <div>
      <div className={globals.containerMain}>
        <div className={styles.frameMonitor}>
          <div className={styles.innerFrameMonitor}>
            <div ref={screenRef} className={styles.screenContainer}>
              <Clock />


              <div className={styles.pageContainer}>
     {pagePcVisible && <PagePc closePagePc={closePagePc} />}
              {calcIsVisible && (
                <Calculator closeCalculator={closeCalculator} />
              )}

              {isVisible && (
                <FloatingWindow
                  containerRef={screenRef}
                  closeWindow={closeWindow}
                />
              )}



              </div>
         
              <div className={styles.navbar}>
    
                <button className={styles.buttomNav} onClick={openPagePc}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.49 5.437l.989 1.122l5.923.386l-.658 3.019h0l-2.085.382l-.581 4.047l-2.97 2.566l-5.212.831l.073 2.522l2.64 1.91l-.588 1.928l-5.583-2.236l-1.355-5.416m9.293 6.219l1.294 2.378h0l3.474.022l1.442 2.757l2.812-.08l-.564 3.293l-2.549 2.987h0l.053 2.704l-3.116 2.287l.086 2.905h0l-1.598-.509l-1.715-3.19l.053-6.336l-2.414-.473l-1.544-2.317l.274-2.336ZM33.77 4.973L31.544 6.53l-3.39.058l-1.447 3.266l2.664 1.652l1.87-1.264l6.805 1.082l1.87-1.458m1.058 26.794l-1.595-2.132l-.008-2.866l-2.744-4.385l-.132-2.784l-2.3-1.223l-2.235 1.485h0l-4.552-1.83l-1.063-3.826l2.582-3.313l3.315.024l1.132 1.806l6.025 1.102h0l4.783-2.13" stroke-width="1"/></svg>
                  Navegador
                </button>
                <button className={styles.buttomNav} onClick={openCalculator}>
                  Open Calculator
                </button>
                <button className={styles.buttomNav} onClick={openWindow}>
                  Open Window
                </button>
              </div>
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
