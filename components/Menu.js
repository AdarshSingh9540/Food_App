import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRes from "../utils/useRes";

const Menu = () =>{

    // const [res , setRes] = useState({});

    const {resId} = useParams();

    const res = useRes(resId);
   
    return !res? <Shimmer/>: (
        <>
            <div>
          <h1>Restaurant id: {resId} </h1>
          <h2>Restaurant name: {res.name}</h2>
          <img src={IMG_CDN_URL+res.cloudinaryImageId} />
          <h3>{res.areaName}</h3>
          <h3>{res.city}</h3>
          <h3>{res.avgRating} stars</h3>
          <h3>{res.costForTwoMessage}</h3>
          
        </div>
        <div>
          
        </div>
        </>
      );
    };
    
export default Menu;