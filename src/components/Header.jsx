import React, { useState, useContext } from "react";
import Menu from '../components/Menu'
import AppContext from "../context/AppContext";
import MyOrder from '../containers/MyOrder'
import iconMenu from '../assets/icons/icon_menu.svg'
import logoYardSale from "../assets/logos/logo_yard_sale.svg";
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import '../styles/Header.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toogleOrder, setToogleOrder] = useState(false);
  const { state: {cart} } = useContext(AppContext);
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
          <li 
            className="navbar-shopping-cart" 
            onClick={() => setToogleOrder(!toogleOrder)}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toogleOrder && <MyOrder />}
    </nav>
  );
};

export default Header;
