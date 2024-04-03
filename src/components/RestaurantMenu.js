import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function RestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=23786&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    }

    if (resInfo === null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id} >{item.card.info.name} - Rs. {item.card.info.price/ 100 || item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;