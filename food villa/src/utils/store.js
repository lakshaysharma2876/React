import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utils/cartSlice";

const store = configureStore({
    reducer : {
        //name of the slice : the slice that you have imported
        cart : cartSlice,
    },
});

export default store;