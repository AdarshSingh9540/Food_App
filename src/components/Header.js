import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Logo_CDN } from "../utils/Constant";
import { useSelector } from "react-redux";



const loggInUser= () =>{
  return false;
}
const Header = ()=>{
  const [isLogIn,setIsLogIn] = useState(false);

const cartItems = useSelector((store)=>store.cart.items)

    return(
      <>
      <div className="flex h-9 bg-black">j
        <img src={Logo_CDN} alt="image" />
        <ul >
          <li> <Link  className="bg-red-800" to="/">Home</Link> </li>
          <li><Link  to="/Contact">Contact Us</Link></li>
          <li><Link  to="/Cart">Cart-{cartItems.length} items</Link></li>
          <li><Link  to="/About">About US</Link></li>
          <li><Link  to="/Instamart">Instamart</Link></li>
          <li> <Link>{
      isLogIn ? <button  style={{background:"green",color:"white",}} onClick={()=> setIsLogIn(false)} >Logout</button> : <button  style={{background:"green",color:"white"}} onClick={()=> setIsLogIn(true)}>Login</button> 
      }</Link></li>
        </ul>
      </div>
    </>
    )
    }

  export default Header;