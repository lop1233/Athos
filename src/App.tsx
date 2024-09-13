import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Instagram from './components/instagram';
import Selection from './components/Selection';
import WhatsApp from './components/Whatsapp';
import Home from './pages/Products';
import TeamsPage from './pages/Teams';

 // Certifique-se de que o caminho está correto

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<Home />} />
        <Route path="/teams" element={<TeamsPage/>}/>
        <Route path='/' element={<Selection/>}/>
      </Routes>
      <WhatsApp /> 
      <Instagram/>
    </div>
  </Router>
);

export default App;
