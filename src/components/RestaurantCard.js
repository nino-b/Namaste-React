import { useContext } from "react";
import { CDN_URL } from "../utils/constants.js";
import { STAR_SVG } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const Restaurantcard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData;

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[15rem] rounded-md bg-gray-100 hover:bg-gray-400">
            <img 
            className="rounded-md"
            src={CDN_URL + cloudinaryImageId} 
            alt="Restaurant logo"/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4 className="cuisines">{cuisines.join(", ")}</h4>
                <h4 className="rating">
                   {/*  <img className="star" src={STAR_SVG}/> */}
                    {avgRating}
                </h4>
                <h4 className="delivery-time">{sla.deliveryTime + ' minutes'}</h4>
                <h4>User: {loggedInUser}</h4>
            
        </div>
    )
}

const withPromotedLabel = (Restaurantcard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}

export {Restaurantcard, withPromotedLabel};