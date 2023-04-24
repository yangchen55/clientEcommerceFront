import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or whatever storage engine you want to use
import authReducer from "./pages/login/authSlice";
import productReducer from "./pages/Product/productSlice";
import categoryReducer from "./pages/category/categorySlice";
import cartReducer from "./pages/Product/CartSlice";

// Define the persist config for each reducer
const authPersistConfig = {
    key: "auth",
    storage: storage,
    // ... other options if needed
};

const productPersistConfig = {
    key: "product",
    storage: storage,
    // ... other options if needed
};

const categoryPersistConfig = {
    key: "category",
    storage: storage,
    // ... other options if needed
};

const cartPersistConfig = {
    key: "cart",
    storage: storage,
    // ... other options if needed
};

// Wrap each reducer with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedProductReducer = persistReducer(productPersistConfig, productReducer);
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categoryReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

// Configure the Redux store
const store = configureStore({
    reducer: {
        user: persistedAuthReducer,
        product: productReducer,
        category: persistedCategoryReducer,
        cart: persistedCartReducer
    }
});

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };
