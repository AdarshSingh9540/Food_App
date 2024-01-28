import React, { useState, useEffect } from "react";
import { restrauantList } from "../Constant";
import RestrauantCard from "./RestrauantCard";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(restaurants)
useEffect(() => {
  fetchdata();
}, []);

// async function getRestaurants(){
//    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//    const json = await data.json();
//   //  console.log(json);
//    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
//   //  setRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle);

// }
const fetchdata = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);

    setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
   
  } catch (error) {
    
    console.log(error);
  }
};

  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-type"
          placeholder="Search.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search--btn"
          onClick={() => {
            const data = filterData(searchInput, restrauantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="list">
        {restaurants.map((restaurant,index) => (
          <RestrauantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
