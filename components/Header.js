import { useState } from "react";


const loggInUser= () =>{
  return false;
}
const Header = ()=>{
  const [isLogIn,setIsLogIn] = useState(false);
    return(
      <>
      <div className="head">
        <img src="https://cdn.octopix.in/uploads/company-logo/2020/12/22/bhukkad-adda-wJFMg3UtbA488gX4Y2hAtxVrJjAnD1tKIRvVV3iJe57xhFE0ARSmwaJhktVWaBitCTW7pVP3NVPWfw1p-350x350.jpg" alt="image" />
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About US</li>
          <li>Cart</li>
        </ul>
      {
      isLogIn ? <button  onClick={()=> setIsLogIn(false)} >Logout</button> : <button  onClick={()=> setIsLogIn(true)}>Login</button> 
      }
      </div>
    </>
    )
    }

  export default Header;