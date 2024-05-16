import React from 'react';
import './App.css'; 

const ItemDetail = ({ id, name, price, image, agregarAlCarrito }) => {
  const handleAgregarAlCarrito = () => {
    const producto = {
      id,
      nombre: name,
      precio: price,
      imagen: image,
      cantidad: 1, 
    };
    agregarAlCarrito(producto);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <button className="btn-agregar" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
