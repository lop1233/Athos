import React from 'react';
import { NavLink } from 'react-router-dom';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Navigation.css'; // Adicione este arquivo para os estilos

const Navigation: React.FC = () => (
  <nav className="nav">
    <NavLink 
      to="/esportes" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Esportes
    </NavLink>
    <NavLink 
      to="/products" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Produtos
    </NavLink>
    <NavLink 
      to="/e-sports" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      E-sports
    </NavLink>
    <NavLink 
      to="/eventos" 
      end 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Eventos
    </NavLink>
  </nav>
);

export default Navigation;