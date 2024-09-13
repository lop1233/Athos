import React from 'react';
import { NavLink } from 'react-router-dom';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Navigation.css'; // Adicione este arquivo para os estilos

const Navigation: React.FC = () => (
  <nav className="nav">
    <NavLink 
      to="/teams" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Times
    </NavLink>
    <NavLink 
      to="/products" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Produtos
    </NavLink>
  </nav>
);

export default Navigation;