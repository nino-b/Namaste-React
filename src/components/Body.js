import { Restaurantcard } from "./RestaurantCard.js";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <Restaurantcard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export {Body};