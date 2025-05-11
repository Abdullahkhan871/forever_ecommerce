import React, { useMemo } from "react";
import { assets } from "../assets/assets"
import { useSelector } from "react-redux";
const PlaceOrder = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useMemo(() => {
    return cartItems.reduce((acumilator, item) => acumilator += item.price * item.quantity, 0)
  }, [cartItems])

  return (
    <div className="py-5 md:py-20 flex flex-col justify-between">
      <div className="flex items-center justify-start gap-2 mb-2 sm:mb-7">
        <h2 className='text-[#707070] text-2xl sm:text-3xl'>Delivery</h2>
        <h2 className='text[#343434] text-2xl sm:text-3xl font-semibold'>Information</h2>
        <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-[10%] md:gap-[20%] items-start">
        <div className="w-full sm:w-[45%] md:w-[40%]">
          <form className="flex flex-col gap-4 sm:gap-7">
            <div className="flex gap-5">
              <input type="text" placeholder="First name" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
              <input type="text" placeholder="Last name" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
            <div>
              <input type="email" placeholder="Email addess" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
            <div>
              <input type="email" placeholder="Street" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
            <div className="flex gap-5">
              <input type="text" placeholder="City" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
              <input type="text" placeholder="State" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
            <div className="flex gap-5">
              <input type="text" placeholder="Zip code" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
              <input type="text" placeholder="Country" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
            <div>
              <input type="email" placeholder="Phone" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required />
            </div>
          </form>
        </div>
        <div className="w-full sm:w-[45%] md:w-[40%] mt-5 sm:mt-0">
          <div className='flex items-center gap-2'>
            <h2 className='text-[#707070] text-2xl sm:text-3xl'>CART</h2>
            <h2 className='text[#343434] text-2xl sm:text-3xl font-semibold'>TOTALS</h2>
            <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
          </div>
          <div >
            <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
              <p>Subtotal</p>
              <p>${cartTotal}</p>
            </div>
            <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
              <p>Shipping Free</p>
              <p>$10.00</p>
            </div>
            <div className='py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
              <p className='text-[#454545] font-bold'>Total</p>
              <p>${cartTotal + 10}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className='flex items-center gap-2 mb-5'>
              <h2 className='text-[#707070] text-lg sm:text-2xl'>Payment</h2>
              <h2 className='text[#343434] text-lg sm:text-2xl font-semibold'>Method</h2>
              <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5 lg:gap-1 ">
              <label htmlFor="strip" className="w-full">
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="strip" />
                  <img src={assets.stripe_logo} alt="" className="w-[60px] h-[20px] object-contain" />
                </div>
              </label>
              <label htmlFor="razorpay" className="w-full">
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="razorpay" />
                  <img src={assets.razorpay_logo} alt="" className="w-[60px] h-[20px] object-contain" />
                </div>
              </label>
              <label htmlFor="cashOnDelivery" className="w-full" >
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="cashOnDelivery" />
                  <p className="text-sm lg:text-xs lg:py-0.5">CASH ON DELIVERY</p>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-end mt-5">
              <button className="bg-black text-white font-medium py-2 px-15">Place Order</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default PlaceOrder;