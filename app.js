import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={hamburgerIcon} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: '#f0f0f0'
}

const Restaurantcard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src={resData.image} 
            alt="Restaurant logo"/>
            <h3 className="res-name">{resData.resName}</h3>

            <div className="card-detail-container">
                <h4 className="region">{resData.region}</h4>
                <h4 className="rating">
                    <img className="star" src={star}/>
                    {resData.rating}
                </h4>
                <h4 className="delivery-time">{resData.deliveryTime}</h4>
            </div>
        </div>
    )
}


const dataList = [
    {
        image: "v1709826147/Namaste%20React/Adjaruli_Khachapuri_p2vduc.webp",
        resName: "Adjara Feast",
        region: "Georgian, Adjarian",
        rating: "5.0",
        deliveryTime: "38 minutes"
    },
    {
        image: "v1709826495/Namaste%20React/Mtiuluri_Khinkali_xh04wy.webp",
        resName: "Mtiuluri Kitchen",
        region: "Georgian, Mriuluri",
        rating: "4.9",
        deliveryTime: "30 minutes"
    },
    {
        image: "v1709831126/Namaste%20React/Kakheti_Mtsvadi_vk9f0f.webp",
        resName: "The Kakhetian Table",
        region: "Georgian, Kakhetian",
        rating: "5.0",
        deliveryTime: "50 minutes"
    },
    {
        image: "v1709831125/Namaste%20React/Megruli_Elarji_xthhy2.webp",
        resName: "Taste of Samegrelo",
        region: "Georgian, Megruli",
        rating: "4.9",
        deliveryTime: "40 minutes"
    },
    {
        image: "v1709831125/Namaste%20React/Guruli_Pkhali_ec4g7j.webp",
        resName: "Guria's Garden",
        region: "Georgian, Gurian",
        rating: "4.9",
        deliveryTime: "30 minutes"
    },
    {
        image: "v1709831125/Namaste%20React/Imeruli_Sacivi_nx32hj.webp",
        resName: "Imereti Harvest",
        region: "Georgian, Imeruli",
        rating: "4.7",
        deliveryTime: "30 minutes"
    },
    {
        image: "v1709832590/Namaste%20React/Svaneti_Kubdari_o2pxlh.jpg",
        resName: "Svaneti Savors",
        region: "Georgian, Mriuluri",
        rating: "4.8",
        deliveryTime: "55 minutes"
    },
    {
        image: "v1709831124/Namaste%20React/Racha_Shkmeruli_fo1qw7.webp",
        resName: "Rachuli Delights",
        region: "Georgian, Svanuri",
        rating: "4.7",
        deliveryTime: "32 minutes"
    },
    {
        image: "v1709832590/Namaste%20React/Shotis_Puri_mv0xaz.jpg",
        resName: "Shotis Puri House",
        region: "Georgian",
        rating: "4.9",
        deliveryTime: "20 minutes"
    },
    {
        image: "v1709832590/Namaste%20React/Churchkhela_aiz0i0.webp",
        resName: "Georgian Sweets Bazaar",
        region: "Georgian",
        rating: "5.0",
        deliveryTime: "25 minutes"
    }
]


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Restaurantcard resData={AdjaraFeastData}/>
                <Restaurantcard resData={MtiuluriKitchenData}/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);