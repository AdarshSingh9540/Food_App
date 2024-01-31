import React, { useState } from 'react';
import { IMG_CDN_URL } from '../Constant'; // Import IMG_CDN_URL here

const RestrauantCard = (props) => {
  return (
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
  );
};

export default RestrauantCard;
