import { createStore, combineReducers } from "redux"
import { productsReducer } from "./reducers/productsReducer"
import warningReducer from "./reducers/warningReducer"

const rootReducer = combineReducers({
    product: productsReducer,
    warning: warningReducer
})

const store = createStore(rootReducer);

export default store;