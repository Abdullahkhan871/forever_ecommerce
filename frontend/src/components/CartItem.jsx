import React from 'react'
import {assets} from "../assets/assets"
const CartItem = ({image, title,price, size, itemCount, updateCount}) => {

  return (
        <div className="py-4 border-y-1  border-[#D1D1D1]"> 
          <div className="grid sm:grid-cols-4 items-center justify-between gap-2">
            <div className="col-span-2 flex gap-4 ">
            <div>
          <img src={image} alt=""  className="w-30 min-w-30"/>

            </div>
            <div className="flex flex-col gap-4">

              <h3 className="font-medium text-xl text-[#494949]">{title}</h3>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-light text-[#494949]">
                {price}
                </p>
                <div className="bg-[#FBFBFB] py-2 px-4 border-1 border-[#DFDFDF] text-[#1D1D1D] ">{size.toUpperCase()}</div>
              </div>
            </div>
            </div>
            <div className="col-span-2 flex items-center justify-between gap-2">
              <div className="sm:text-center">
              <input type="number" value={itemCount}  className="w-1/2  px-2 sm:px-4 outline-none border-1 text-lg border-[#DFDFDF]"/>

              </div>
              <div>

              <img src={assets.bin_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default CartItem