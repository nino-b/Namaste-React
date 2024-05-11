import { CDN_URL } from "../utils/constants.js";
import { STAR_SVG } from "../utils/constants.js";

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const Restaurantcard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData;

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
            
        </div>
    )
}

export {Restaurantcard};