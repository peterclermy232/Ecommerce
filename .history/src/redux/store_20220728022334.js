import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const store = configureStore(rootReducers)

export default store;