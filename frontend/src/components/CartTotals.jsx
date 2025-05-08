import React from 'react'

const CartTotals = () => {
  return (
          <>
             <div className='flex items-center gap-2'>
                <h2 className='text-[#707070] text-2xl sm:text-3xl'>CART</h2>
                <h2 className='text[#343434] text-2xl sm:text-3xl font-semibold'>TOTALS</h2>
                <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
            </div>
            <div >
                <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
                    <p>Subtotal</p>
                    <p>$60.00</p>
                </div>
                <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
                    <p>Shipping Free</p>
                    <p>$10.00</p>
                </div>
                <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
                    <p className='text-[#454545] font-bold'>Total</p>
                    <p>$70.00</p>
                </div>
            </div>
            <div className='sm:flex sm:items-center sm:justify-end'>
                <button className='w-full font-medium py-2 px-4 bg-black text-white'>Proceed to checkout</button>
            </div>
    </>
  )
}

export default CartTotals