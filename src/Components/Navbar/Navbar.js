import React, { useState } from 'react'
import "../Navbar/Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
      //create a state hoooks to manage the nabmenu hr tags
      const [menu, setMenu] = useState("shop");
      const cartCount = useSelector(state=>state.cartReducer.cart);
      let count = 0;
      cartCount.forEach(item=> count +=item.quantity);

      const [showNavbar, setshowNavbar] = useState(false);
      const handleShowNavbar = () => {
        setshowNavbar(!showNavbar);
      };
      const Hamburger = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="24"
          viewBox="0 0 52 24"
        >
          <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 47)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="42"
              height="4"
              rx="2"
              transform="translate(304 67)"
              fill="#574c4c"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="52"
              height="4"
              rx="2"
              transform="translate(294 57)"
              fill="#574c4c"
            />
          </g>
        </svg>
      );
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <Link to={'/'}> <p>SHOPPER</p> </Link> 
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: "none"}} to='/'> Shop </Link>  {menu === "shop" ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: "none"}} to='/mens'> Mens </Link> {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("womens")}}> <Link style={{textDecoration: "none"}} to='/womens'> Womens </Link>  {menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("kids")}}> <Link style={{textDecoration: "none"}} to='/kids'> Kids </Link>  {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
      
        <div className="nav-login-cart">
            <button> <Link style={{textDecoration: "none"}} to='/login'> Login </Link> </button>
            <Link style={{textDecoration: "none"}} to='/cart'> <img src={cart_icon} alt="" /> </Link> 
            <div className="nav-cart-count"> {count} </div>
        </div>
         </div>

    </div>
  )
}

export default Navbar