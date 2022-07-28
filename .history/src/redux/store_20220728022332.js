import { configureStore } from "";
import rootReducers from "./reducer";

const store = configureStore(rootReducers)

export default store;