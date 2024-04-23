import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link to={`/item/${id}`} className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
