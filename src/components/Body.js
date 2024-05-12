import Shimmer from "./Shimmer.js";
import { Restaurantcard, withPromotedLabel } from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import { SWIGGY_API } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(Restaurantcard);

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

        setListOfRestaurants(listOfRes);
        setFilteredRestaurants(listOfRes);
        
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you're offline!! Please check your internet connection.</h1>
        );
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            {/* Filter / Search */}
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={
                        (event) => {
                            setSearchText(event.target.value)
                            }
                    }/>
                    <button className="px-5 py-1 bg-green-100 m-4 rounded-md" 
                    onClick={() => {
                        const filteredRes =  listOfRestaurants.filter(res => { 
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurants(filteredRes);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="flex px-5 py-1 bg-gray-100 rounded-md" 
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurants(filteredRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label for="userName" className="mx-2">UserName:</label>
                    <input className=" border border-black" value={loggedInUser} id="userName" onChange={((e) => {setUserName(e.target.value)})}/>
                </div>
            </div>


            {/* Restaurants with online food delivery in ... (city name) */}
            <div className="flex flex-row flex-wrap">
                {
                    filteredRestaurants.map(restaurant =>
                        <Link 
                        key={restaurant.info.id} 
                        to={"/restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant.info}/> : <Restaurantcard resData={restaurant.info}/>
                            }
                        </Link>)
                }
            </div>
        </div>
    )
}

export default Body;