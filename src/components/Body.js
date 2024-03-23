import { Restaurantcard } from "./RestaurantCard.js";
import { restaurantList } from "../utils/mockData.js";

const Body = () => {
    const listOfRestaurants = [
        {
            data: {
              id: "73011",
              name: "KFC",
              cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
              cuisines: ["American", "Snacks", "Biryani"],
              costForTwoString: "₹300 FOR TWO",
              deliveryTime: 31,
              avgRating: "3.8",
            },
          },
        {
            data: {
              id: "73011",
              name: "Dominos",
              cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
              cuisines: ["American", "Snacks", "Biryani"],
              costForTwoString: "₹300 FOR TWO",
              deliveryTime: 31,
              avgRating: "4.5",
            },
          },
    ];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {console.log('hello')}}>Top Rated Restaurants</button>
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