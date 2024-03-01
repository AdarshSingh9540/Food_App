import { useState, useEffect } from "react";
import { Menu_URL } from "./Constant";
const useRes = (resId) =>{
      const [res , setRes] = useState(null);

     useEffect(()=> {
         getRestaurantInfo();
     },[])
     console.log({resId} )
     async function getRestaurantInfo(){
         const data = await fetch(Menu_URL+resId);
         const json = await data.json();
         
         console.log(json);
        //  console.log(json?.data?.cards[2]?.card?.card?.info?.name);
        //  console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[2].card.info.name);
        //  const restaurantName = json?.data?.cards?.[2]?.card?.card?.info?.name || "N/A";
         setRes(json?.data);
}
       return res;
};

export default useRes;