import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ]

        case REMOVE_ITEM:
            return state.filter(list => list._id !== action.payload)
        default:
            return state
    }
}