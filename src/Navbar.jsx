import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Mi Tienda de Cartas</h1>
        <ul className="nav-links">
          <li><Link to="/">MGZcards</Link></li>
          <li><Link to="/item/1">Booster Box OP01</Link></li>
          <li><Link to="/item/2">Booster Box OP02</Link></li>
          <li><Link to="/item/3">Booster Box OP03</Link></li>
          <li><Link to="/item/4">Booster Box OP04</Link></li>
          <li><Link to="/item/5">Booster Box OP05</Link></li>
        </ul>
        <div className="cart-container">
          <Link to="/cart">
            <img src="../images/cart-icon.png" alt="Carrito" className="cart-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
