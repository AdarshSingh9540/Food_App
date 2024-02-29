import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRes from "../utils/useRes";

const Menu = () =>{

    // const [res , setRes] = useState({});

    const {resId} = useParams();

    const res = useRes(resId);
  
    // let cat = res.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((e) =>{
    //   e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // })
    // console.log(cat);
    return !res? <Shimmer/>: (
        <div className="Menu">
            <div>
          <h1>Restaurant id: {resId} </h1>         
           <h2 >Restaurant name: {res?.cards[2]?.card?.card?.info?.name}</h2>
          <img style={{width:"500px"}} src={IMG_CDN_URL+res?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
          <h3>{res?.cards[2]?.card?.card?.info?.areaName}</h3>
          <h3>{res?.cards[2]?.card?.card?.info?.city}</h3>
          <h3>{res?.cards[2]?.card?.card?.info?.avgRating} stars</h3>
          <h3>{res?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div>
        <h1>Menu</h1>
        <ul>
        {/* {console.log(res.cards[5].groupedCard.cardGroupMap.REGULAR.cards)} */}
      
{console.log(res.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) => (
  e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)))};

    {res?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((groupedCard) => (
      groupedCard?.card?.card?.itemCards?.map((itemCard) => (
        <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name}</li>
      ))
    ))}
  </ul>
  </div>
        </div>
      );
    };
    
export default Menu;