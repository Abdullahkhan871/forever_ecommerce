import React, { useEffect, useState } from 'react'
import ProductItem from "./ProductItem"
import { useSelector } from 'react-redux';

const RelatedProduct = ({ item }) => {
    const { isLoading, products } = useSelector((state) => state.products);
    const [result, setResult] = useState([]);
    function takeResult() {
        let arr = [];
        let i = 0;
        while (arr.length < 5) {
            if (products[i].subCategory.toLowerCase() == item.subCategory.toLowerCase() && products[i]._id !== item._id) {
                arr.push(products[i])
            }
            i++;
        }
        return arr.length > 0 ? arr : [];
    }

    useEffect(() => {
        setResult(takeResult())
    }, [item])


    if (isLoading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            {
                result.length > 0 &&
                result.map((list) => (
                    <ProductItem
                        key={list._id}
                        id={list._id}
                        image={list.image[0]}
                        name={list.name}
                        price={list.price}
                    />
                ))
            }
        </>
    )
}

export default RelatedProduct