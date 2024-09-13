import React from 'react';
import { NavLink } from 'react-router-dom';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Selection.css'; // Estilos para a página de seleção

const Selection: React.FC = () => (
  <div className="selection-container">
    <h2>Escolha uma opção</h2>
    <div className="selection-links">
      <div className="selection-item">
        <NavLink to="/products" className="selection-link">
          <img src="/carrinho-de-compras.png" alt="Produtos" className="selection-image" />
          <p>Produtos</p>
        </NavLink>
      </div>
      <div className="selection-item">
        <NavLink to="/teams" className="selection-link">
          <img src="/lider-do-time.png" alt="Times" className="selection-image" />
          <p>Times</p>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Selection;
