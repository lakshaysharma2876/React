import { CartThings } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_CART } from "../config";
import {clearCart, clearItem} from "../utils/cartSlice"

const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const clearCartItems = (item) => {
    dispatch(clearCart(item));
  };

  return cartItems.length == 0 ? (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={EMPTY_CART} className="w-50 h-50"></img>
      <span className="font-light">There is nothing to put into the cart</span>
    </div>
  ) : (
    <div>
      <div className="flex flex-wrap justify-between text-center">
        <span className="text-3xl font-bold p-2 mx-5 my-3">
          <u>CART</u>
        </span>
        <button
          className="border-1 bg-amber-50 cursor-pointer p-1 rounded-sm m-5 shadow hover:bg-amber-300"
          onClick={() => {
            clearCartItems(cartItems);
        }}
        >
          Clear Cart
        </button>
      </div>

      <ul className="flex flex-col justify-center gap-4">
        {cartItems.map((item, index) => {
          return (
            <div className="flex-wrap shadow" key={index}>
            <li>
              <CartThings {...item} />
              
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default cart;
