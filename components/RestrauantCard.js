import React, { useState } from 'react';
import { IMG_CDN_URL } from '../Constant'; // Import IMG_CDN_URL here
import Shimmer from './Shimmer';


const RestrauantCard = (props) => {
  const isOpen = props.restaurant.info.isOpen;
  const [isOpenState, setIsOpenState] = useState(isOpen);

  if (isOpenState === true) {
    setIsOpenState("Open");
  }
  if(isOpenState===false){
    setIsOpenState("close");
  }
  
  return !props? <Shimmer/>: ( 
    <div >
    <div className="details">
      <h1 className="isOpen" style={{background:"green", color:"white", padding:"5px",margin:"2px", fontSize:"20px", borderRadius:"8px"}}>{isOpenState.toString()}</h1>
      </div>
    <div className="card">
      <img  src={IMG_CDN_URL + props.restaurant.info.cloudinaryImageId} alt="img" /> 
      <h1>{props.restaurant.info.name}</h1>
      <h3>{props.restaurant.info.locality}</h3>
      <h4>{props.restaurant.info.avgRatingString} stars</h4>
      <h4>
        {props.restaurant.info.cuisines.join(", ")} {/* Assuming avgRating is a number */}
      </h4>
      <h4>{props.restaurant.info.costForTwo}</h4>
    </div>
    </div>
  );
};

export default RestrauantCard;
