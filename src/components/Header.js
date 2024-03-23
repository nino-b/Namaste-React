const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://res.cloudinary.com/dbbgwb82c/image/upload/v1709831099/Namaste%20React/hamburger-svgrepo-com_pgkrkg.svg" alt="logo"/>
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

export default Header;