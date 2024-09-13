import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => (
    <main>
      <section id="products">
        <h2>Produtos da Atlética</h2>
        <ProductList/>
      </section>
    </main>
  );

export default Home;