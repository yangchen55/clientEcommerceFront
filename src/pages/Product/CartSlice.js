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
            const tempArg = state.cart.filter((item) => (item._id !== payload._id))
            //else push to the state [...state.cart, payload]
            state.cart = [...tempArg, payload]
        }

    }

});
const { reducer, actions } = cartSlice;
export const { setAddtoCard } = actions
export default reducer;