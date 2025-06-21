import { Link } from "react-router";
import { IMG_CDN } from "../config";

const Header = () => {
    return (
        <div className="flex flex-wrap justify-between bg-white " >
            <a href="/">
            <img id="food_icon_image" src={IMG_CDN} alt ="Food Villa icon" className="size-30 p-2.5" />
            </a>
            <ul className="flex flex-wrap p-3 content-between font-bold">
                <li className="py-5 px-3 hover:text-red-500"><Link to="/">🏠Home</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/about">🅰️About</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/contactUs">©️Contact Us</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/cart">🛒Cart</Link></li>
            </ul>
        </div>
    );
}

export default Header;