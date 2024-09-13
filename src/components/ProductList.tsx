import React from 'react';
import { Product } from '../types';
import '/home/luiz/Documentos/Projetos/testes/Athos/e-sports-team/src/styles/ProductList.css'; // Arquivo CSS para a estilização

const products: Product[] = [
  { name: 'Camiseta', price: 'R$ 49,90' },
  { name: 'Moletom', price: 'R$ 99,90' },
  { name: 'Caneca', price: 'R$ 29,90' },
  { name: 'Boné', price: 'R$ 39,90' }
];

const ProductList: React.FC = () => (
  <div className="product-list">
    {products.map((product, index) => (
      <div key={index} className="product-card">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button className="buy-button">Comprar</button>
      </div>
    ))}
  </div>
);

export default ProductList;
