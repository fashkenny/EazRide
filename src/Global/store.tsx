import { configureStore } from "@reduxjs/toolkit";
import reducer from "./authGlobal";

export const store = configureStore({
    reducer
})