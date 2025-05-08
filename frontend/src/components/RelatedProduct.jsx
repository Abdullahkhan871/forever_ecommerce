import React, { useEffect, useState } from 'react'
import ProductItem from "./ProductItem"
import {products} from "../assets/assets";

const RelatedProduct = ({item}) => {
    const [result, setResult] = useState([]);
    console.log(item)
    function takeResult(){
        let arr = [];
        let i = 0;
        while(arr.length < 5){
            if(products[i].subCategory.toLowerCase() == item.subCategory.toLowerCase() && products[i]._id !== item._id){
                console.log("subCategory", products[i].subCategory)
                        arr.push(products[i])
            }
            i++;
        }        
        return arr.length > 0 ? arr : []; 
    }
    
    useEffect(()=>{
        setResult(takeResult())
    }, [item])
    
    console.log(result)
  return (
    <>
        {
            result.length > 0 &&
            result.map((list)=> (
                <ProductItem 
                key={list._id} 
                id = {list._id}
                image = {list.image[0]}
                name = {list.name}
                price = {list.price}
                />
            )) 
        }
    </>
  )
}

export default RelatedProduct