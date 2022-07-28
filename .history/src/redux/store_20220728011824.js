import { configureStore } from "redux";
import rootReducers from "./reducer";

const store = configStore(rootReducers)

export default store;