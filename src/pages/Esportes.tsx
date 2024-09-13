import React from 'react';
import { Link } from 'react-router-dom';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/Teams.css';

const teams = [
  { name: 'Futsal', logoUrl: '/icons8-futsal-100.png', description: 'Time de Futsal da nossa atlética.' },
  { name: 'Vôlei', logoUrl: '/volleyball-player.png', description: 'Time de Vôlei com grandes jogadores.' },
 
];

const TeamsPage: React.FC = () => (
  <main className="teams-page">
    <h1>Times de Esportes e e-Sports</h1>
    <div className="team-list">
      {teams.map((team, index) => (
        <div key={index} className="team-card">
          <img src={team.logoUrl} alt={`${team.name} Logo`} className="team-logo" />
          <h2>{team.name}</h2>
          <p>{team.description}</p>
          <Link to={`/teams/${team.name.toLowerCase()}`} className="view-more">Ver mais</Link>
          <Link to={`/register/${team.name.toLowerCase()}`} className="register">Registrar-se</Link>
        </div>
      ))}
    </div>
  </main>
);

export default TeamsPage;
