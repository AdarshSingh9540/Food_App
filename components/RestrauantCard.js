import React from 'react';
import { IMG_CDN_URL } from '../Constant'; // Import IMG_CDN_URL here

const RestrauantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, areaName, cloudinaryImageId } = props.restaurant; // Include cloudinaryImageId

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" /> {/* Use cloudinaryImageId here */}
      <h2>{name}</h2>
      <h3>{cuisines.join(',')}</h3>
      <h4>{costForTwo}</h4>
      <h4>
        {avgRating} * {/* Assuming avgRating is a number */}
      </h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestrauantCard;
