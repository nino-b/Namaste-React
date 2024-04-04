import Shimmer from "./Shimmer.js";
import { Restaurantcard } from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants.js";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(
            SWIGGY_API
        );

        if (!data.ok) {
            throw new Error('Problem with data fetching');
        }

        const json = await data.json();
        const listOfRes = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Swiggy API, expected result - restaurant list: " , json)
        setListOfRestaurants(listOfRes);
        setFilteredRestaurants(listOfRes);
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">

            {/* Filter / Search */}
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={
                        (event) => {
                            setSearchText(event.target.value)
                            }
                    }/>
                    <button className="search-btn" 
                    onClick={() => {
                        const filteredRes =  listOfRestaurants.filter(res => { 
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setFilteredRestaurants(filteredRestaurants);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>


            {/* Restaurants with online food delivery in ... (city name) */}
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant =>
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Restaurantcard resData={restaurant.info}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;