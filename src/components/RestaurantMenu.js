import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

function RestaurantMenu() {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId );

    useEffect(() => {
        fetchMenu();
    }, []);


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