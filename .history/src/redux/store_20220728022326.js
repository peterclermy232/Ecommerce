import { configureStore } from "redux";
import rootReducers from "./reducer";

const store = configureStore(rootReducers)

export default store;