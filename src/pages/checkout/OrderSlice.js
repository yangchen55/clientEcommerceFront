import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    order: []
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setAddToOrder: (state, { payload = [] }) => {
            state.order = payload

        }
    }

})

const { reducer, actions } = orderSlice;
export const { setAddToOrder } = actions
export default reducer;