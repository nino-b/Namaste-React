import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="log-in" onClick={() => {btnName === 'Log In' ? setBtnName('Log Out') : setBtnName('Log In')}} >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;