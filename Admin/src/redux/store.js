import { createStore, combineReducers } from "redux"
import { productsReducer } from "./reducers/productsReducer"
import warningReducer from "./reducers/warningReducer"
import tokenReducer from "./reducers/tokenReducer"

const rootReducer = combineReducers({
    product: productsReducer,
    warning: warningReducer,
    token: tokenReducer
})

const store = createStore(rootReducer);

export default store;