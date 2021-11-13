
const NavTop = () => {
  let  marginRight={
       margin:'0px'
    }
    return ( 
      <div className="navbar-top" style={{height:'37px',color:'#000'}}>
        
            <div className="navbar-top-elements " style={{height:'37px'}}>
                <a className="waves-effect waves-light btn-flat white-text " style={{marginRight}} href="#">Login</a>
                <a className="waves-effect waves-light btn-flat white-text " style={{marginRight}} href="#">Signup</a>
                <a className="waves-effect waves-light btn-flat white-text " style={{marginRight}} href="#">logout</a>
                <a className="waves-effect waves-light btn-flat white-text " style={{marginRight}} href="#">Dashboard</a>
            </div>
         
      </div>
    
  
      );
}
 
export default NavTop;