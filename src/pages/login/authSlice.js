import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    notRegisteredUser: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        requestPending: (state) => {
            state.isLoading = true;
        },
        requestSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        },
        setNotRegistered: (state, { payload }) => {
            state.notRegisteredUser = payload
            state.isLoading = false;
        }


    },
});

const { reducer, actions } = userSlice;

export const { requestPending, requestSuccess, setNotRegistered } = actions;

export default reducer;
