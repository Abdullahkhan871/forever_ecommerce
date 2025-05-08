import {ADD_ITEM,REMOVE_ITEM} from "./actionTypes";


export const addItem = (item)=>{
    console.log(item)
    return {
        type : ADD_ITEM,
        payload : item
    }
}

export const removeItem = (id)=>{
    return {
        type : REMOVE_ITEM,
        payload : id
    }
}