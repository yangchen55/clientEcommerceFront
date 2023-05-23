import { createSlice } from "@reduxjs/toolkit";
const initialState = {

    orderList: []
}
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setAddToOrderList: (state, { payload = [] }) => {
            if (state.orderList.length === 0 && payload.length === 0) return
            state.orderList = payload
        }
    }

})

const { reducer, actions } = orderSlice;
export const { setAddToOrderList } = actions
export default reducer;