import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
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
                    <button className="log-in">Log in</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;