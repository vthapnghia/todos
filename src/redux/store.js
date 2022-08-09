import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme"
import loadingReducer from "./loading"

export const store =  configureStore({
    reducer: {
        theme: themeReducer,
        loading: loadingReducer,
    }
})  