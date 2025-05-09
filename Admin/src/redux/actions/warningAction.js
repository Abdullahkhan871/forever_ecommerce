import { CLEAR, FILL } from "./actionTypes"

export const emptyWarning = (text) => {
    return {
        type: FILL,
        payload: text,
    }
}
export const clearWarning = () => {
    return {
        type: CLEAR,
    }
}