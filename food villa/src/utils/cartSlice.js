import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state, action) => {
            //we are adding items to the state of the slice
            state.items.push(action.payload);
        },
        clearCart : (state,action) => {
             state.items = [] ;
        },
        clearItem : (state,action) => {
            state.items.splice(action.payload,1);
        },
    }
});

export const {addItem, clearCart, clearItem} = cartSlice.actions;
export default cartSlice.reducer;