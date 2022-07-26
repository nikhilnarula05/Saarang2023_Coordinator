import React from "react";
import logo from './logo.jpg'
function Header() {
    return(
    <div className="header">
    <img 
    src={logo} 
    alt="Saarang" 
    />
    <h3 style={{ color: 'white'}} className="headerContent">Saarang 2023</h3>
    </div>
    )
}
export default Header