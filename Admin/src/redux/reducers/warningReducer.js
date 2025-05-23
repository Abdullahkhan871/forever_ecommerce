import { CLEAR, FILL } from "../actions/actionTypes";


const initialState = "";


function warningReducer(state = initialState, action) {
    switch (action.type) {
        case FILL:
            return action.payload;
        case CLEAR:
            return "";
        default:
            return state
    }
}
export default warningReducer;