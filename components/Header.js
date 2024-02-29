import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Logo_CDN } from "../Constant";
import { useSelector } from "react-redux";



const loggInUser= () =>{
  return false;
}
const Header = ()=>{
  const [isLogIn,setIsLogIn] = useState(false);

const cartItems = useSelector((store)=>store.cart.items)

    return(
      <>
      <div className="head">
        <img src={Logo_CDN} alt="image" />
        <ul >
          <li> <Link style={{textDecoration: 'none',color:'black' }} to="/">Home</Link> </li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Contact">Contact Us</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/About">About US</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Cart">Cart-{cartItems.length} items</Link></li>
          <li><Link style={{textDecoration: 'none',color:'black'}} to="/Instamart">Instamart</Link></li>
          <li> <Link>{
      isLogIn ? <button  style={{background:"green",color:"white",}} onClick={()=> setIsLogIn(false)} >Logout</button> : <button  style={{background:"green",color:"white"}} onClick={()=> setIsLogIn(true)}>Login</button> 
      }</Link></li>
        </ul>
      </div>
    </>
    )
    }

  export default Header;