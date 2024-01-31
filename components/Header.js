import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo_CDN } from "../Constant";



const loggInUser= () =>{
  return false;
}
const Header = ()=>{
  const [isLogIn,setIsLogIn] = useState(false);
    return(
      <>
      <div className="head">
        <img src={Logo_CDN} alt="image" />
        <ul >
          <li> <Link style={{textDecoration: 'none',color:'black'}} to="/">Home</Link> </li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Contact">Contact Us</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/About">About US</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Cart">Cart</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Instamart">Instamart</Link></li>
        </ul>
      {
      isLogIn ? <button  onClick={()=> setIsLogIn(false)} >Logout</button> : <button  onClick={()=> setIsLogIn(true)}>Login</button> 
      }
      </div>
    </>
    )
    }

  export default Header;