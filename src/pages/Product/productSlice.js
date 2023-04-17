import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    carts: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, { payload = [] }) => {
            state.products = payload
        },
        setAddtoCard: (state, { payload = [] }) => {
            state.carts = payload
        }

    }

});
const { reducer, actions } = productSlice;
export const { setProducts, setAddtoCard } = actions
export default reducer;