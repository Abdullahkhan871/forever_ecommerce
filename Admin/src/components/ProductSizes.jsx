import React, { useEffect, useRef } from 'react'

const ProductSizes = ({ size, setItem, resetItemSizes, setResetItemSizes }) => {
    const toggle = useRef(false)
    const che = useRef()

    useEffect(() => {
        if (resetItemSizes) {
            che.current.style.backgroundColor = "#e2e8f0";
            setResetItemSizes((prev) => !prev)
        }
    }, [resetItemSizes])


    function toggles() {
        toggle.current = !toggle.current;

        if (toggle.current) {
            console.log("true", toggle.current)
            che.current.style.backgroundColor = "#fbe7f3"
            setItem(prev => ({ ...prev, sizes: [...prev.sizes, size] }))
        } else {
            console.log("false", toggle.current)
            che.current.style.backgroundColor = "#e2e8f0"
            setItem(prev => ({ ...prev, sizes: prev.sizes.filter(list => list !== size) }))
        }
    }

    return (
        <div ref={che} className="py-2 px-4 sm:text-lg bg-[#e2e8f0] cursor-pointer"
            onClick={toggles}
        >{size.toUpperCase()}</div>
    )
}

export default ProductSizes