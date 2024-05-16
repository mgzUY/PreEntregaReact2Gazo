import React, { useState } from 'react';

const Checkout = ({ carrito }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailConfirmacionChange = (e) => {
    setEmailConfirmacion(e.target.value);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con éxito');
    console.log('Datos del formulario:');
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Email:', email);
    console.log('Productos en el carrito:');
    console.log(carrito);
    console.log('Total de la compra:', calcularTotal());
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.name} - Precio: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total de la Orden: ${calcularTotal()}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
        <input type="text" value={apellido} onChange={handleApellidoChange} placeholder="Apellido" />
        <input type="text" value={telefono} onChange={handleTelefonoChange} placeholder="Teléfono" />
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
        <input
          type="email"
          value={emailConfirmacion}
          onChange={handleEmailConfirmacionChange}
          placeholder="Confirmar Email"
        />
        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;
