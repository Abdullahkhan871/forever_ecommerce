import { ADD_ITEM, GET_ITEMS, REMOVE_ITEM } from "../actions/actionTypes";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ITEMS:
            return action.payload;

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