import React, { useState } from 'react';
import styles from './../css/pagePc.module.css';

const IframeViewer = ({ closeWindow}) => {
  const sitios = [
    { nombre: 'Curriculum', url: 'https://www.jkalith.site/' },
    { nombre: 'Consola', url: 'https://exercises-js-psi.vercel.app/excuses.html' },
    { nombre: 'Tv channel', url: 'https://tv-channel-drab.vercel.app/' },
  ];

  const [urlActual, setUrlActual] = useState('');
  const [mostrarIframe, setMostrarIframe] = useState(false);

  const handleAbrirSitio = (url) => {
    setUrlActual(url);
    setMostrarIframe(true);
  };

  const handleCerrarIframe = () => {
    setMostrarIframe(false);
    setUrlActual('');
  };

  return (
    <div className={styles.container}>
             <button className={styles.closeButton} onClick={closeWindow}>
          ✖
        </button>

      <div style={{ marginBottom: '10px' }}>
        {sitios.map((sitio, index) => (
          <button
            key={index}
            onClick={() => handleAbrirSitio(sitio.url)}
            className={styles.button}
          >
            {sitio.nombre}
          </button>
        ))}
      </div>

      {mostrarIframe && (
        <div>
        
          <button
            onClick={handleCerrarIframe}
            className={styles.closeButton}
          >
            Cerrar sitio
          </button>

          <div className={styles.iframeContainer}>
            <iframe
              src={urlActual}
              className={styles.iframe}
              title="Visor de sitios"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default IframeViewer;
