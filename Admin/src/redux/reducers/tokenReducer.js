import { ADD_TOKEN, REMOVE_TOKEN } from "../actions/actionTypes";



const initialState = "";


function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TOKEN:
            return action.payload
        case REMOVE_TOKEN:
            return "";
        default:
            return state
    }
}

export default tokenReducer;