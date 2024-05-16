import React, { useState } from 'react';

const CartWidget = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
      {children({
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
      })}
    </div>
  );
};

export default CartWidget;
