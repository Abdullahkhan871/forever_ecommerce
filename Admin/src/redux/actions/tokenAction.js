import { ADD_TOKEN, REMOVE_TOKEN } from "./actionTypes";

export const addToken = (value) => {
    return {
        type: ADD_TOKEN,
        payload: value,
    }
}

export const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
    }
}