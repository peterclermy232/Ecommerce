import { configure } from "redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers)

export default store;