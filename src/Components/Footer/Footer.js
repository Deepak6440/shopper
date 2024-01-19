import React from 'react'
import "../Footer/Footer.css"
import footer_logo from "../Assests/logo_big.png"
import instargram_icon from "../Assests/instagram_icon.png"
import pintester_icon from "../Assests/pintester_icon.png"
import whatsapp_icon from "../Assests/whatsapp_icon.png"

function Footer() {
  return (
    <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socials-icons">
                <div className="footer-icons-container">
                    <img src={instargram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer