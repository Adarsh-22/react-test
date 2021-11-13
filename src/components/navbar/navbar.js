import Navpart from "./navpart";
import { useState } from "react";
import "../../css/navbar.css";
import Mainlogo from "../../images/navbar/mainlogo.png";
import Menulogo from "../../images/navbar/menu.png";

const Navbar = () => {
    
        const [sideNav,setSideNav] =useState(false);
        const openSidenav = () => setSideNav(!sideNav);
    return ( 
      
        <div className="navbar">
        <div className="navtop">
              <div className="main-logo">
                <img className="companylogo" src={Mainlogo} alt="errror" />
                <img className="menulogo" src={Menulogo} onClick={openSidenav} alt="errror" />
              </div>

              <div className="navtop-right">
                  <a className="navtop-right-helpline" href="">call helpline</a>
                  <a className="navtop-right-appointment" href="">Request an appointment</a>
              </div>
        </div>
       
       <Navpart />
        <div className="sidenavmini">
           <div className="nav-first">

           </div>
           <div className="nav-second"></div>

           </div>
            
        </div>
        
     );
}
 
export default Navbar;