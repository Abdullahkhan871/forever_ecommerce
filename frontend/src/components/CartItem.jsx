import { assets } from "../assets/assets"
import { useDispatch } from 'react-redux';
import { changeQuantityOfItem, removeItem } from '../Redux/features/cartSlice';
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { _id, image, name, price, sizes, quantity, } = item;

  function handleRemoveItem() {
    toast("Item Removed");
    dispatch(removeItem({ _id, sizes }));
  }
  return (
    <div className="py-4 border-y-1 border-[#D1D1D1]">
      <div className="grid sm:grid-cols-4 items-center justify-between gap-2">
        <div className="col-span-2 flex gap-4 ">
          <div>
            <img src={image[0]} alt="" className="w-30 min-w-30" />

          </div>
          <div className="flex flex-col gap-4">

            <h3 className="font-medium text-xl text-[#494949]">{name}</h3>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-light text-[#494949]">
                ${price * quantity}
              </p>
              <div className="bg-[#FBFBFB] py-2 px-4 border-1 border-[#DFDFDF] text-[#1D1D1D] ">{sizes.toUpperCase()}</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-between gap-2">
          <div className="sm:text-center">
            <input type="number" className="w-1/2  px-2 sm:px-4 outline-none border-1 text-lg border-[#DFDFDF]"
              value={quantity}
              onChange={(e) => dispatch(changeQuantityOfItem({ item, value: e.target.value }))} />

          </div>
          <div className='cursor-pointer' onClick={handleRemoveItem}>

            <img src={assets.bin_icon} alt="" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem