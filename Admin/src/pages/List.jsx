import React, { useEffect } from 'react'
import ListItem from '../components/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { backendUrl } from '../App'
import axios from 'axios'
import { useState } from 'react'


const List = () => {
    const product = useSelector(state => state.product)

    useEffect(() => {
        getItemsList()
    }, [])

    return (
        <div className='text-gray-600'>
            <h2 >All Products List</h2>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='hidden py-1 px-2 bg-[#f3f4f6] border border-[#e5e7eb] font-medium sm:grid sm:grid-cols-7'>
                    <p className='col-span-1'>Image</p>
                    <p className='col-span-3'>Name</p>
                    <p className='col-span-1'>Category</p>
                    <p className='col-span-1'>Price</p>
                    <p className='col-span-1'>Action</p>
                </div>
                <div className='flex flex-col gap-2'>
                    {
                        product.length > 0 && product.map((list) => (
                            <ListItem key={list._id}
                                list={list}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default List
