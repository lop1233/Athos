import React from 'react';
import styles from '../styles/Home.module.css';

const AthosInfo: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#historia">História</a>
        <a href="#fundadores">Fundadores</a>
        <a href="#esportes">Esportes</a>
        <a href="#eventos">Eventos</a>
      </nav>

      <section className={styles.infoSection}>
        <div className={styles.section} id="historia">
          <h2 className={styles.title}>História da Athos</h2>
          <p className={styles.description}>
            {/* Aqui vai a história da Athos */}
            A história da Athos será contada aqui. Fale sobre a fundação e evolução da atlética ao longo dos anos.
            <div className={styles.imageWrapper}>
              <img src="/path-to-image-historia.jpg" alt="Imagem sobre a história da Athos" />
            </div>
            Continue o texto sobre a história após a imagem.
          </p>
        </div>

        <div className={styles.section} id="fundadores">
          <h2 className={styles.title}>Fundadores</h2>
          <p className={styles.description}>
            {/* Adicione os nomes e informações dos fundadores */}
            Aqui, os fundadores da Athos serão mencionados, com uma pequena biografia ou destaque das contribuições.
            <div className={styles.imageWrapper}>
              <img src="/path-to-image-fundadores.jpg" alt="Fundadores da Athos" />
            </div>
            Continue o texto sobre os fundadores após a imagem.
          </p>
        </div>

        <div className={styles.section} id="esportes">
          <h2 className={styles.title}>Esportes</h2>
          <p className={styles.description}>
            {/* Adicione o foco esportivo da atlética */}
            Detalhe os esportes que a Athos promove, competições, e como a atlética se destaca no cenário esportivo.
            <div className={styles.imageWrapper}>
              <img src="/path-to-image-esportes.jpg" alt="Esportes na Athos" />
            </div>
            Continue o texto sobre os esportes após a imagem.
          </p>
        </div>

        <div className={styles.section} id="eventos">
          <h2 className={styles.title}>Eventos</h2>
          <p className={styles.description}>
            {/* Adicione a missão da atlética */}
            A missão da Athos, seus valores, e o foco nas atividades esportivas, sociais e culturais que promovem a união dos membros.
            <div className={styles.imageWrapper}>
              <img src="/path-to-image-missao.jpg" alt="Evento x" />
              <img src="/path-to-image-missao.jpg" alt="Evento y" />
            </div>
            Continue o texto sobre os eventos após as imagens.
            <div className={styles.imageWrapper}>
            <img src="/path-to-image-missao.jpg" alt="Evento z" />
            <img src="/path-to-image-missao.jpg" alt="Evento a" />
            </div>
          </p>
        </div>
      </section>
    </>
  );
};

export default AthosInfo;
