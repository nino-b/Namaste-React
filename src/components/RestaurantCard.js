const Restaurantcard = (props) => {
    const {resData} = props;
    const {image, resName, region, rating, deliveryTime} = resData;

    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src={"https://res.cloudinary.com/dbbgwb82c/image/upload/" + image} 
            alt="Restaurant logo"/>
            <h3 className="res-name">{resName}</h3>

            <div className="card-detail-container">
                <h4 className="region">{region}</h4>
                <h4 className="rating">
                    <img className="star" src="https://res.cloudinary.com/dbbgwb82c/image/upload/v1709831099/Namaste%20React/star_tna1lg.svg"/>
                    {rating}
                </h4>
                <h4 className="delivery-time">{deliveryTime}</h4>
            </div>
        </div>
    )
}

export {Restaurantcard};