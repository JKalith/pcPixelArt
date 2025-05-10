import { useState } from "react";

import styles from "../css/trafficLight.module.css";

export default function TrafficLight() {
  const [red, setRed] = useState(true);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);

  const changeRed = () => {
    setRed(true);
    setGreen(false);
    setYellow(false);
  };

  const changeYellow = () => {
    setRed(false);
    setGreen(false);
    setYellow(true);
  };
  const changeGreen = () => {
    setRed(false);
    setGreen(true);
    setYellow(false);
  };

  return (
    <div>
      <div className={styles.containerMain}>
        <div className={styles.containerLight}>
          <button
            onClick={changeRed}
            className={`${styles.light} ${styles.lightRed} ${
              red ? styles.active : ""
            }`}
          ></button>
          <button
            onClick={changeGreen}
            className={`${styles.light} ${styles.lightGreen} ${
              green ? styles.active : ""
            }`}
          ></button>

          <button
            onClick={changeYellow}
            className={`${styles.light} ${styles.lightYellow} ${
              yellow ? styles.active : ""
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
}
