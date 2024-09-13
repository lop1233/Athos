import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    game: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cadastro enviado com sucesso!');
    setFormData({ name: '', email: '', phone: '', game: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome completo"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      <select
        name="game"
        value={formData.game}
        onChange={handleChange}
        required
      >
        <option value="">Selecione o jogo</option>
        <option value="lol">League of Legends</option>
        <option value="csgo">CS:GO</option>
        <option value="valorant">Valorant</option>
        <option value="dota2">Dota 2</option>
      </select>
      <button type="submit">Enviar Cadastro</button>
    </form>
  );
};

export default RegistrationForm;