import { ADD_ITEM, GET_ITEMS, REMOVE_ITEM } from "./actionTypes";


export const getItems = (items) => {
    console.log("get Items")
    return {
        type: GET_ITEMS,
        payload: items
    }
}
export const addItem = (item) => {
    console.log(item)
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}