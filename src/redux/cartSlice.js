import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {
        updatecart: (state, action) => {
            state.products = action.payload
        },

    }
});

export const { updatecart } = cartSlice.actions;


export default cartSlice.reducer;