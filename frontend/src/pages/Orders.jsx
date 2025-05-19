import { useSelector } from "react-redux";

const Orders = () => {
  const myOrder = useSelector(state => state.myOrder.orders)
  return (
    <div className="py-10 sm:py-20">
      <div className='flex items-center gap-2 mb-10'>
        <h2 className='text-[#707070] text-2xl sm:text-3xl'>MY</h2>
        <h2 className='text[#343434] text-2xl sm:text-3xl font-semibold'>ORDERS</h2>
        <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
      </div>
      {
        myOrder.length > 0 && myOrder.map(i => (

          <div key={i._id} className="py-4 border-y-1 border-[#D1D1D1] flex flex-col sm:flex-row  sm:items-center justify-between gap-2 md:gap-5 flex-wrap">
            <div className="flex gap-5">
              <div>
                <img src={i.image[0]} alt="" className="max-w-20" />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="text-[#494949] text-xl lg:text-2xl font-medium">{i.name}</h2>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-2xl text-[#494949]">₹{i.price}</p>
                  <p className="text-xl text-[#494949]">Quantity: {i.quantity}</p>
                  <p className="text-xl text-[#494949]">Size: {i.sizes}</p>
                </div>
                <div>
                  <p className="text-[#3C3C3C] sm:text-lg">
                    Date:
                    <span className="ml-2 text-[#989898] sm:text-lg">
                      {i.date}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full lg:w-[48%]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A625]"></div>
                <p className="text-[#454545] lg:text-xl">{i.status}</p>
              </div>
              <div>
                <button disabled className="cursor-not-allowed py-1 md:py-2 px-1 lg:px-6 bg-[#FFFFFF] text-lg lg:text-xl text-[#454545] border-1 border-[#BABABA] rounded-sm">Track Order</button>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
};

export default Orders;
