import React from "react";
import './header.css';
//import logoUrl from '../../assets/logo.svg';
import logo from './logo.jpg'
function Header() {
    return(
        // <nav class="bg-dark navbar-dark navbar">
        //     <div className="row col-12 d-flex justify-content-center text-white">
        //         <h3>Saarang Registration</h3>
        //     </div>
        // </nav>
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