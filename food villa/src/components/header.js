import { Link } from "react-router";
import { IMG_CDN } from "../config";
import {useSelector} from "react-redux";
import store from "../utils/store";

const Header = () => {
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="flex flex-wrap justify-between shadow ">
            <a href="/">
            <img id="food_icon_image" src={IMG_CDN} alt ="Food Villa icon" className="size-30 p-2.5" />
            </a>
            <ul className="flex flex-wrap p-3 content-between font-medium">
                <li className="py-5 px-3 hover:text-red-500"><Link to="/">🏠Home</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/about">🅰️About</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/contactUs">©️Contact Us</Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/cart">🛒Cart
                {cartItems.length == 0 ? " " :
                <span className="align-super bg-white border-2 px-1.5 m-0.5 rounded-full">{cartItems.length}</span>
                }
                </Link></li>
                <li className="py-5 px-3 hover:text-red-500"><Link to="/Instamart">ℹ️Instamart</Link></li>
            </ul>
        </div>
    );
}

export default Header;