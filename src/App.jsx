import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Checkout from './Checkout'; 
import CartWidget from './CartWidget';
import './App.css';

const App = () => {
  return (
    <Router>
      <CartWidget>
        {({ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }) => (
          <>
            <Navbar carrito={carrito} />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route
                path="/item/:itemId"
                element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />}
              />
              <Route path="/cart" element={<Checkout carrito={carrito} />} />
            </Routes>
          </>
        )}
      </CartWidget>
    </Router>
  );
};

export default App;
