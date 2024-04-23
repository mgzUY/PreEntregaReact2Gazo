import React from 'react';
import ProductCard from './ProductCard';
import './App.css'; 

const ItemListContainer = () => {
  const products = [
    { id: 1, name: 'One Piece TCG Booster Box OP01', price: '600 U$D', image: 'images/BBOP01.jpg' },
    { id: 2, name: 'One Piece TCG Booster Box OP02', price: '300 U$D', image: 'images/BBOP02.jpg' },
    { id: 3, name: 'One Piece TCG Booster Box OP03', price: '220 U$D', image: 'images/BBOP03.jpg' },
    { id: 4, name: 'One Piece TCG Booster Box OP04', price: '150 U$D', image: 'images/BBOP04.jpg' },
    { id: 5, name: 'One Piece TCG Booster Box OP05', price: '200 U$D', image: 'images/BBOP05.jpg' }
  ];

  return (
    <div className="item-list-container">
      <h2 className="catalog-title">Catálogo de One Piece TCG</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
