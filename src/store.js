import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";

const store = configureStore({
    reducer: {
        user: authReducer
    }

})
export default store;