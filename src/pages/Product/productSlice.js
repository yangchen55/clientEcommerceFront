import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    filteredProducts: []

}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, { payload = [] }) => {
            state.products = payload
        },
        setFilteredProducts: (state, { payload = [] }) => {
            state.filteredProducts = payload
        }


    }

});
const { reducer, actions } = productSlice;
export const { setProducts, setFilteredProducts } = actions
export default reducer;