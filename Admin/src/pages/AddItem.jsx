import React, { useEffect, useMemo, useRef, useState } from 'react'
import uploadImage_icon from "../assets/uploadImage_icon.png"
import UploadImages from '../components/UploadImages'
import ProductSizes from '../components/ProductSizes'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addItem } from '../redux/actions/productAction'
import { emptyWarning } from '../redux/actions/warningAction'


const AddItem = () => {
    const dispatch = useDispatch()
    const [resetItemSizes, setResetItemSizes] = useState(false)

    const [item, setItem] = useState({
        name: "",
        description: "",
        price: '',
        image: [],
        category: "Men",
        subCategory: "Topwear",
        sizes: [],
        bestseller: false
    })


    function handleChange(e) {
        const { value, name } = e.target;

        setItem(prev => ({ ...prev, [name]: value }))


        console.log("vlv =>", value)
        console.log("name => ", name)
    }

    const uploadImagesData = useMemo(() => ([
        {
            id: "image1",
            uploadImage_icon,
        },
        {
            id: "image2",
            uploadImage_icon,
        },
        {
            id: "image3",
            uploadImage_icon,
        },
        {
            id: "image4",
            uploadImage_icon,
        },
    ]), [])

    const showWarning = (message) => {
        dispatch(emptyWarning(message));

        setTimeout(() => {
            dispatch(emptyWarning(""));
        }, 2000);
    };

    function handleItemSubmit(e) {
        e.preventDefault();
        console.log(typeof +item.price)

        if (item.name.trim() == "") {
            showWarning("please fill name")
            return
        }
        else if (item.description.trim() == "") {
            showWarning("please fill description")

            return
        }
        else if (!(+item.price > 0)) {
            showWarning("please fill currect price")
            return
        }
        else if (item.image.length <= 0) {
            showWarning("please fill atleast 1 image")
            return
        }
        else if (item.category.trim() == "") {
            showWarning("please fill category")
            return
        }
        else if (item.subCategory.trim() == "") {
            showWarning("please fill subCategory")
            return
        }
        else if (item.sizes.length <= 0) {
            showWarning("please select at least one size")
            return
        }

        dispatch(addItem(item))
        setItem({
            _id: uuidv4(),
            name: "",
            description: "",
            price: '',
            image: [],
            category: "Men",
            subCategory: "Topwear",
            sizes: [],
            date: new Date().toISOString(),
            bestseller: false
        })
        e.target.reset();
        setResetItemSizes(true)
    }

    return (
        <div>
            <h2 className='mb-4'>Upload Image</h2>
            <form className='w-full lg:w-1/2 flex flex-col gap-5 ' onSubmit={handleItemSubmit}>
                <div className='flex gap-4 items-center flex-wrap sm:flex-nowrap'>
                    {
                        uploadImagesData.length > 0 && uploadImagesData.map((list) => (
                            <UploadImages
                                key={list.id}
                                id={list.id}
                                uploadImage_icon={list.uploadImage_icon}
                                setItem={setItem}
                                resetItemSizes={resetItemSizes}
                                setResetItemSizes={setResetItemSizes}
                            />
                        ))
                    }
                </div>
                <div>
                    <label htmlFor='name' className=''>Product name</label>
                    <input type="text" id='name' name="name" placeholder='Tpye here' className='w-full p-2 mt-2 border border-[#e5e7eb] rounded-sm bg-white outline-[#c586a5]'
                        onChange={(e) => handleChange(e)}
                        value={item.name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='description'>Product Description</label>
                    <textarea placeholder='Write content here' name="description" id="description" className='w-full p-2 mt-2 border border-[#e5e7eb] rounded-sm bg-white outline-[#c586a5]'
                        onChange={(e) => handleChange(e)}
                        value={item.description}
                        required
                    ></textarea>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[5%]'>
                    <div className='w-full'>
                        <label htmlFor="category">Product category</label>
                        <select name="category" id="category" className='w-full p-2 mt-2 border border-[#e5e7eb] rounded-sm bg-white outline-[#c586a5] '
                            onChange={(e) => handleChange(e)}
                            value={item.category}
                        >
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="subCategory">Sub category</label>
                        <select name="subCategory" id="subCategory" className='w-full p-2 mt-2 border border-[#e5e7eb] rounded-sm bg-white outline-[#c586a5] '
                            onChange={(e) => handleChange(e)}
                            value={item.subCategory}
                        >
                            <option value="Topwear">Topwear</option>
                            <option value="Bottomwear">Bottomwear</option>
                            <option value="Winterwear">Winterwear</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="price">Product Price</label>
                        <input name='price' id='price' placeholder='25' type="number" className='w-full p-2 mt-2 border border-[#e5e7eb] rounded-sm bg-white outline-[#c586a5] '
                            onChange={(e) => handleChange(e)}
                            value={item.price}
                            required
                        />
                    </div>
                </div>

                <div>
                    <h2 className='mb-2'>Product Sizes</h2>
                    <div className='flex items-center gap-4 flex-wrap'>
                        {
                            ["s", "m", "l", "xl", "xxl"].map((size) => (
                                <ProductSizes
                                    key={size}
                                    size={size}
                                    setItem={setItem}
                                    resetItemSizes={resetItemSizes}
                                    setResetItemSizes={setResetItemSizes}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="bestseller" id="bestseller"
                        onChange={(e) =>
                            setItem((pre) => ({ ...pre, bestseller: e.target.checked ? true : false }))
                        }
                        checked={item.bestseller ? true : false}
                        required
                    />
                    <label htmlFor="bestseller" className='cursor-pointer'>Add to bestseller</label>
                </div>
                <div>

                    <button className='bg-black py-2 px-8 text-white'>ADD</button>
                </div>

            </form>
        </div>
    )
}

export default AddItem