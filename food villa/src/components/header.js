import { Link } from "react-router";
import { IMG_CDN } from "../config";

const Header = () => {
    return (
        <div className="header" >
            <a href="/">
            <img id="food_icon_image" src={IMG_CDN} alt ="Food Villa icon"/>
            </a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
}

export default Header;