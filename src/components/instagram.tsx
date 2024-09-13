import React from 'react';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Whatsapp.css'; // Verifique se este caminho está correto

const Instagram: React.FC = () => (
  <a 
    href="https://www.instagram.com/athos_atletica?igsh=dGd3MDl4aGk5c21i" 
    className="instagram-button" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Visite nosso Instagram"
  >
    <i className="fab fa-instagram"></i> {/* Font Awesome para ícone do Instagram */}
  </a>
);

export default Instagram;
