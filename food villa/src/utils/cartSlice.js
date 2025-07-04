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
            const index = state.items.indexOf(action.payload);
            state.items.splice(index,1);
        },
    }
});

export const {addItem, clearCart, clearItem} = cartSlice.actions;
export default cartSlice.reducer;