import { useState } from "react";
import SidenavContent from './navpart-comp';
const SideNavmini = () => {
    const [sideNav,setSideNav] =useState(false);
    const openSidenav =() => setSideNav(!sideNav);
    return (
        SidenavContent.map()
      );
}
 
export default SideNavmini;