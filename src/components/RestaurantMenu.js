import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

function RestaurantMenu() {

    const {resId} = useParams();
    const dummy = 'Dummy data';
    const resInfo = useRestaurantMenu(resId );
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer/>;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
/* console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 */
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => {
        return c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>
            {categories.map((category, index) => {
           /*      console.log('mapped: ', category?.card?.card) */
                return <RestaurantCategory 
                    key={category?.card?.title}
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
                })
            }
        </div>
    );
}
export default RestaurantMenu;