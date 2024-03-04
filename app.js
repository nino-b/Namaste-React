import React from "react";
import ReactDOM from "react-dom/client";
import hamburgerIcon from '/assets/img/hamburger-svgrepo-com.svg';
import adjaruli from '/assets/img/Adjaruli_Khachapuri.jpg';
import star from '/assets/img/star.svg';

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

const Restaurantcard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src={adjaruli} 
            alt="Restaurant logo"/>
            <h3 className="res-name">Adjaruli</h3>
            <div className="card-detail-container">
                <h4 className="region">Georgian, Adjarian</h4>
                <h4 className="rating">
                    <img className="star" src={star}/>
                    5.0 
                </h4>
                <h4 className="delivery-time">38 minutes</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Restaurantcard/>
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