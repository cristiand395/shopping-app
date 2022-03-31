import React, { useState } from "react";
import Menu from '../components/Menu'
import iconMenu from '../assets/icons/icon_menu.svg'
import logoYardSale from "../assets/logos/logo_yard_sale.svg";
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import '../styles/Header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logoYardSale} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggle} className="navbar-email">
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
