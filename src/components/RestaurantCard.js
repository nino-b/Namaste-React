import { CDN_URL } from "../utils/constants.js";
import { STAR_SVG } from "../utils/constants.js";

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const Restaurantcard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData;

    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src={CDN_URL + cloudinaryImageId} 
            alt="Restaurant logo"/>
            <h3 className="res-name">{name}</h3>

            <div className="card-detail-container">
                <h4 className="cuisines">{cuisines.join(", ")}</h4>
                <h4 className="rating">
                    <img className="star" src={STAR_SVG}/>
                    {avgRating}
                </h4>
                <h4 className="delivery-time">{deliveryTime + ' minutes'}</h4>
            </div>
        </div>
    )
}

export {Restaurantcard};