import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, { payload = [] }) => {
            state.categories = payload
        }

    }

});
const { reducer, actions } = categorySlice;
export const { setCategories } = actions
export default reducer;