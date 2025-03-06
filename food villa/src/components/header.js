import { IMG_CDN } from "../config";

const Header = () => {
    return (
        <div className="header" >
            <a href="/">
            <img id="food_icon_image" src={IMG_CDN} alt ="Food Villa icon"/>
            </a>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

export default Header;