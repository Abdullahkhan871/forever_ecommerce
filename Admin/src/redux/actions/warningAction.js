import { FILL } from "./actionTypes"

export const emptyWarning = (text) => {
    return {
        type: FILL,
        payload: text,
    }
}