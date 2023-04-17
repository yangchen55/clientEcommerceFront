import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import productReducer from "./pages/Product/productSlice"
import categoryReducer from "./pages/category/categorySlice"
const store = configureStore({
    reducer: {
        user: authReducer,
        product: productReducer,
        category: categoryReducer
    }

})
export default store;