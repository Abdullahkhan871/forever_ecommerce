import React, { useEffect, useMemo, useRef, useState } from "react";
import { assets } from "../assets/assets"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EMAILPATTERN } from "../constants/regex";
import { useNavigate } from "react-router-dom";
import { addOrders } from "../Redux/features/orderSlice";
import axios from "axios";


const PlaceOrder = () => {
  const [razorPaymentId, setRazorPaymentId] = useState("");
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const user = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    street: useRef(null),
    city: useRef(null),
    state: useRef(null),
    zipCode: useRef(null),
    country: useRef(null),
    phone: useRef(null),
  };
  const { firstName, lastName, email, street, city, state, zipCode, country, phone } = user

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acumilator, item) => acumilator += item.price * item.quantity, 0)
  }, [cartItems])

  const paymentGateway = {
    razorpayRef: useRef(null),
    stripRef: useRef(null),
    codRef: useRef(null),
  }

  const { razorpayRef, stripRef, codRef } = paymentGateway

  async function loadRazorpay() {
    try {

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: (cartTotal + 10) * 100,
        currency: "INR",
        name: "Recipe store",
        description: "Payment for Order",
        handler: async function (response) {
          console.log("Payment successful", response);
          if (response.razorpay_payment_id) {
            toast("check order on My order section")
            removeformValue()
            dispatch(addOrders(cartItems))
            navigate("/order")
          } else {
            toast("Payment failed try again")
          }
          // await axios.post(`${import.meta.env.VITE_CURRENT_SITE_URL}/placeorder`, { amount: (cartTotal + 10) * 100 });
        },
        prefill: {
          name: "vamsi narayanam",
          email: "vamikrish.rock@gmail.com",
          contact: "9582908655",
        },
        notes: {
          address: "dwarka sector-7",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Error:", error.response?.data || error.message);
      alert("Payment failed. Try again!");
    }

  }



  function handleSumbit(e) {
    e.preventDefault();
    if (!firstName.current.value.trim() || !lastName.current.value.trim() || !street.current.value.trim() || !city.current.value.trim() || !state.current.value.trim() || !zipCode.current.value.trim() || !country.current.value.trim()) {
      toast("Please fill form before place order")
      return
    }
    else if (!EMAILPATTERN.test(email.current.value)) {
      toast("Please write email")
      return
    } else if (phone.current.value.length < 8) {
      toast("Mobile number should be more than 8")
      return
    }

    if (!razorpayRef.current.checked && !codRef.current.checked) {
      toast("Please Choose one Payment")
      return
    }

    if (razorpayRef.current.checked) {
      loadRazorpay()
    }

    if (codRef.current.checked) {
      toast("check order on My order section")
      removeformValue()
      dispatch(addOrders(cartItems))
      navigate("/order")
      return
    }
  }

  function removeformValue() {
    razorpayRef.current.checked = false
    // stripRef.current.checked = false
    codRef.current.checked = false

    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    street.current.value = "";
    city.current.value = "";
    state.current.value = "";
    zipCode.current.value = "";
    country.current.value = "";
    phone.current.value = "";
  }


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
              <input type="text" placeholder="First name" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.firstName} />
              <input type="text" placeholder="Last name" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.lastName} />
            </div>
            <div>
              <input type="email" placeholder="Email addess" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.email} />
            </div>
            <div>
              <input type="text" placeholder="Street" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.street} />
            </div>
            <div className="flex gap-5">
              <input type="text" placeholder="City" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.city} />
              <input type="text" placeholder="State" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.state} />
            </div>
            <div className="flex gap-5">
              <input type="text" placeholder="Zip code" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.zipCode} />
              <input type="text" placeholder="Country" className="w-1/2 px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.country} />
            </div>
            <div>
              <input type="number" placeholder="Phone" className="w-full px-3 py-2 text-[#8B8B8B] outline-1 outline-[#C5C5C5]" required ref={user.phone} />
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
              <p>₹{cartTotal}</p>
            </div>
            <div className='border-b-1 py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
              <p>Shipping Fee</p>
              <p>₹10.00</p>
            </div>
            <div className='py-3 flex items-center justify-between border-[#E5E5E5] text-[#555555]'>
              <p className='text-[#454545] font-bold'>Total</p>
              <p>₹{cartTotal + 10}</p>
            </div>
          </div>
          <div className="mt-5">
            <div className='flex items-center gap-2 mb-5'>
              <h2 className='text-[#707070] text-lg sm:text-2xl'>Payment</h2>
              <h2 className='text[#343434] text-lg sm:text-2xl font-semibold'>Method</h2>
              <div className='w-6 sm:w-8 h-0.5 bg-[#252525]'></div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5 lg:gap-1 ">
              {/* <label htmlFor="strip" className="w-full">
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="strip" ref={stripRef} />
                  <img src={assets.stripe_logo} alt="" className="w-[60px] h-[20px] object-contain" />
                </div>
              </label> */}
              <label htmlFor="razorpay" className="w-full cursor-pointer">
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="razorpay" ref={razorpayRef} />
                  <img src={assets.razorpay_logo} alt="" className="w-[60px] h-[20px] object-contain" />
                </div>
              </label>
              <label htmlFor="cashOnDelivery" className="w-full cursor-pointer"  >
                <div className="w-full border-1 border-[#B3B3B3] py-2 px-3 flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="cashOnDelivery" ref={codRef} />
                  <p className="text-sm lg:text-xs lg:py-0.5">CASH ON DELIVERY</p>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-end mt-5">
              <button className="cursor-pointer bg-black text-white font-medium py-2 px-15" onClick={handleSumbit}>Place Order</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default PlaceOrder;