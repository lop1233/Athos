import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Instagram from './components/instagram';
import WhatsApp from './components/Whatsapp';
import Esports from './pages/E-sports';
import TeamsPage from './pages/Esportes';
import AthosInfo from './pages/Home';
import Home from './pages/Products';


 // Certifique-se de que o caminho está correto

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AthosInfo/>}/>
        <Route path="/products" element={<Home />} />
        <Route path="/esportes" element={<TeamsPage/>}/>
        <Route path="/e-sports" element={<Esports/>}/>
      </Routes>
      <WhatsApp /> 
      <Instagram/>
    </div>
  </Router>
);

export default App;
