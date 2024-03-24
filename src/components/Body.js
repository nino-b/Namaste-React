import { Restaurantcard } from "./RestaurantCard.js";
import { restaurantList } from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.data.avgRating >= 4);
                    setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                { // made change
                    listOfRestaurants.map(restaurant => <Restaurantcard key={restaurant.data.id} resData={restaurant.data}/>)
                }
            </div>
        </div>
    )
}

export {Body};