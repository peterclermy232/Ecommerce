import { conStore } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers)

export default store;