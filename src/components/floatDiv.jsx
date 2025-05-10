import styles from './../css/FloatingWindow.module.css';
import { useState, useRef } from 'react';
import TrafficLight from "../components/trafficLight"
export default function FloatingWindow({ containerRef, closeWindow }) {
  const windowRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const startDrag = (e) => {
    const rect = windowRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  const onDrag = (e) => {
    if (!windowRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const win = windowRef.current;

    // Calcular nueva posición relativa al contenedor
    let newX = e.clientX - containerRect.left - offset.current.x;
    let newY = e.clientY - containerRect.top - offset.current.y;

    // Limitar dentro del contenedor
    const maxX = containerRect.width - win.offsetWidth;
    const maxY = containerRect.height - win.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    win.style.left = `${newX}px`;
    win.style.top = `${newY}px`;
  };

  const stopDrag = () => {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
  };

  return (
    <div
      ref={windowRef}
      className={styles.window}
      style={{ top: 0, left: 0 }}
    >
      <div className={styles.titleBar} onMouseDown={startDrag}>
        <span>My Window</span>
        {/* Botón de cerrar (X) */}
        <button className={styles.closeButton} onClick={closeWindow}>
          ✖
        </button>
      </div>
      <div className={styles.content}>
        <p>Este es un semaforo</p>

        <TrafficLight/>
      </div>
    </div>
  );
}
