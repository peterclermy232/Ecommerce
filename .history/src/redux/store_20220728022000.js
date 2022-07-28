import { configureStore } from "redux";
import rootReducers from "./reducer";

const store = creaStore(rootReducers)

export default store;