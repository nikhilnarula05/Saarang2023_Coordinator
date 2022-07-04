import React from "react";
import './header.css';
//import logoUrl from '../../assets/logo.svg';
function Header() {
    return(
        // <nav class="bg-dark navbar-dark navbar">
        //     <div className="row col-12 d-flex justify-content-center text-white">
        //         <h3>Saarang Registration</h3>
        //     </div>
        // </nav>
    <div className="header">
    <img 
    src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/265207279_10160052865773754_8511387362535972679_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=spFTs-pDqjUAX84s4tz&_nc_ht=scontent-bom1-1.xx&oh=00_AT_FOS5JhgqIpTU6o1yvnGZe8Wo7c_-_Hy-p_MZrIIicwA&oe=62C818D9" 
    alt="Saarang" 
    />
    <h3 style={{ color: 'white'}} className="headerContent">Saarang 2023</h3>
    </div>

    )
}
export default Header