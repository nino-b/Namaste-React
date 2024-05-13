import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Selector. Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? '✅' : '🔴'} 
                    </li>
                    <li  className="px-4">
                        <Link to="/" >Home</Link> 
                    </li>
                    <li  className="px-4">
                        <Link to="/about" >About Us</Link> 
                    </li>
                    <li  className="px-4">
                        <Link to="/contact" >Contact Us</Link> 
                    </li>
                    <li  className="px-4">
                        <Link to="/grocery" >Grocery</Link> 
                    </li>
                    <li  className="px-4 font-bold text-xl">
                        <Link to="/cart" >Cart ({cartItems.length} items)</Link> 
                    </li>
                    <button className="log-in" onClick={() => {btnName === 'Log In' ? setBtnName('Log Out') : setBtnName('Log In')}} >{btnName}</button>
                    <li  className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;