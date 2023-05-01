import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        setAddtoCard: (state, { payload = [] }) => {
            //if already existing increate the qty
            const tempArg = state.cart.filter((item) => (item?._id !== payload._id))
            //else push to the state [...state.cart, payload]
            state.cart = [...tempArg, payload]
        },
        setRemoveFromCard: (state, { payload }) => {
            // remove the product with the given id from the cart
            const updatedCart = state.cart.filter(item => item?._id !== payload);
            state.cart = updatedCart;
        },
        setUpdateCart: (state, { payload }) => {
            const { id, name, value } = payload;
            const itemIndex = state.cart.findIndex((item) => item._id === id);
            if (itemIndex !== -1) {
                state.cart[itemIndex][name] = value;
            }
        },


    }

});
const { reducer, actions } = cartSlice;
export const { setAddtoCard, setUpdateCart, setRemoveFromCard } = actions
export default reducer;