import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? '✅' : '🔴'} 
                    </li>
                    <li>
                        <Link to="/" >Home</Link> 
                    </li>
                    <li>
                        <Link to="/about" >About Us</Link> 
                    </li>
                    <li>
                        <Link to="/contact" >Contact Us</Link> 
                    </li>
                    <li>
                        <Link to="/grocery" >Grocery</Link> 
                    </li>
                    <li>
                        <Link to="/cart" >Cart</Link> 
                    </li>
                    <button className="log-in" onClick={() => {btnName === 'Log In' ? setBtnName('Log Out') : setBtnName('Log In')}} >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;