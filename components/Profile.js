import { useState } from "react"
 
 const Profile = () =>{
    const [count,setCount] = useState(0);
    return(
        <>
           <h1>This is my profile</h1>
           <h2>Count: {count}</h2>
           <button onClick= {()=> setCount(count+1)}>count</button>
        </>
    );
};

export default Profile