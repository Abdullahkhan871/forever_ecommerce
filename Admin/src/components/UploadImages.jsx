import React, { useEffect, useState } from 'react'

const UploadImages = ({ id, uploadImage_icon, setItem, resetItemSizes, setResetItemSizes }) => {
    const [uploadImage, setUploadImage] = useState(null)

    useEffect(() => {
        if (resetItemSizes) {
            setUploadImage("");
            setResetItemSizes((prev) => !prev)
        }
    }, [resetItemSizes])
    return (
        <label htmlFor={id} className='cursor-pointer'>
            <img src={uploadImage ? uploadImage : uploadImage_icon} alt="" className='w-20' />
            <input
                type="file"
                id={id}
                accept="image/*"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        const fileUrl = URL.createObjectURL(e.target.files[0]);
                        setUploadImage(fileUrl);
                        setItem(prev => ({ ...prev, image: [...prev.image, e.target.files[0]] }))
                    }
                }}
                hidden
            />
        </label>
    )
}

export default UploadImages