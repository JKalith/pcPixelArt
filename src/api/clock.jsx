import React, { useState, useRef, useEffect } from "react";
import styles from "../css/clock.module.css";

function Clock() {
    const [timeCR, setTimeCR] = useState(null);
  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date().toLocaleTimeString("es-CR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeCR(now);
    };

    updateLocalTime();
    const interval = setInterval(updateLocalTime, 1000); // actualiza cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.clockTime}>
        🕒 Hora en Costa Rica: {timeCR || "Cargando..."}
      </div>
    </div>
  );
}

export default Clock;
