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
  const [restaurants, setRestaurants] = useState(restrauantList);
  const [searchInput, setSearchInput] = useState("");
useEffect(() => {
  getRestaurants();
}, []);

async function getRestaurants(){
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
   console.log(json);
   console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
   setRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle);

}

  
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
        {restaurants.map((restaurant) => (
          <RestrauantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
