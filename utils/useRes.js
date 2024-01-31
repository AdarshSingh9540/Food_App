import { useState, useEffect } from "react";
import { Menu_URL } from "../Constant";
const useRes = (resId) =>{
      const [res , setRes] = useState(null);

     useEffect(()=> {
         getRestaurantInfo();
     },[])
     console.log({resId} )
     async function getRestaurantInfo(){
         const data = await fetch(Menu_URL);
         const json = await data.json();
         console.log(json);
         console.log(json.data.cards[2].card.card.info.name);
         const restaurantName = json?.data?.cards?.[2]?.card?.card?.info?.name || "N/A";
         setRes(json.data.cards[2].card.card.info);
}
       return res;
};

export default useRes;