import React from "react";
import logo from './logo.jpg'
function Header() {
    return(
    <p className="header">
    <img 
    src={logo} 
    alt="Saarang" 
    />
    <h1 style={{ color: 'white'}} className="headerContent">Saarang 2023</h1>
    </p>
    )
}
export default Header