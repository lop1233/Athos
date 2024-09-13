import React from 'react';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Whatsapp.css'; // Certifique-se de criar este arquivo de estilos

const WhatsApp: React.FC = () => (
  <a 
    href="https://chat.whatsapp.com/D45loFSNv5v5dGhcgmVwjR" 
    className="whatsapp-button" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Entrar no grupo do WhatsApp"
  >
    <i className="fab fa-whatsapp"></i> {/* Font Awesome para ícone */}
  </a>
);

export default WhatsApp;
