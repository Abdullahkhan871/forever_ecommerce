import { FILL } from "../actions/actionTypes";


const initialState = "";


function warningReducer(state = initialState, action) {
    switch (action.type) {
        case FILL:
            setTimeout(() => {
                action.payload = ""
            }, 5000)
            return action.payload;
        default:
            console.log(action.type)
            return state
    }
}
export default warningReducer;