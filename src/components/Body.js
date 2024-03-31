import { Restaurantcard } from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2%22%2C&offset=0&page_type=null'
        );

        if (!data.ok) {
            throw new Error('Problem with data fetching');
        }

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
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
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
                    setFilteredRes(filteredRestaurants);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant => <Restaurantcard key={restaurant.info.id} resData={restaurant.info}/>)
                }
            </div>
        </div>
    )
}

export {Body};