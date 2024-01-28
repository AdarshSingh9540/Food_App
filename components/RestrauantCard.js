import React from 'react';
import { IMG_CDN_URL } from '../Constant'; // Import IMG_CDN_URL here

const RestrauantCard = (props) => {
  

  return (
    <div className="card">
      {/* <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" /> Use cloudinaryImageId here */}
      <h2>{props.restaurant.info.name}</h2>
      <h3>{props.restaurant.info.name}</h3>
      <h4>{props.restaurant.info.name}</h4>
      <h4>
        {props.restaurant.info.name} * {/* Assuming avgRating is a number */}
      </h4>
      <h4>{props.restaurant.info.name}</h4>
    </div>
  );
};

export default RestrauantCard;
