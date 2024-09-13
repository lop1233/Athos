import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation'; // Certifique-se de que o caminho está correto
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Header.css'; // Caminho para o arquivo CSS

const Header: React.FC = () => {
  const location = useLocation();

  // Determina se deve usar a classe 'header-small' baseado na rota
  const isSmallHeader = location.pathname !== '/'; // Ajuste a condição conforme necessário

  return (
    <header className={isSmallHeader ? 'header-small' : 'header'}>
      <a href="/" className="logo-link">
        <img src="/Athos.png" alt="Logo" className="logo-image" />
      </a>
      {!isSmallHeader && <h1>Atlética Athos</h1>}
      <Navigation /> {/* Adiciona o componente de navegação ao lado do logo */}
    </header>
  );
};

export default Header;
