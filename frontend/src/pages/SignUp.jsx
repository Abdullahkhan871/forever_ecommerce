import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe"
import { toast } from "react-toastify";
import { EMAILPATTERN, PASSWORDPATTERN } from "../constants/regex";
import { useDispatch } from "react-redux";
import { addToken } from "../Redux/features/tokenSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const userDetails = {
    name: useRef(null),
    email: useRef(null),
    password: useRef(null),
  }
  const { name, email, password } = userDetails;

  function handleSubmit(e) {
    e.preventDefault();


    if (!name.current.value.trim()) {
      toast("Please add Name")
      return;
    }
    else if (!EMAILPATTERN.test(email.current.value)) {
      toast("email should be like this john.doe@example.com")
      return;
    }
    else if (!PASSWORDPATTERN.test(password.current.value)) {
      toast("Password should be like this : Welcome@2024")
      return;
    }
    toast("Welcome")
    dispatch(addToken((name.current.value + email.current.value + password.current.value)))
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  }



  return (
    <div className="py-20 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-2">
          <h2 className="prata-regular text-4xl text-center text-[#414141]">Sign Up</h2>
          <div className="w-10 h-0.5 bg-[#484848]"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          <div className="text-center">
            <input type="text" className="w-full sm:w-2/4 outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Name" name="name" ref={name} required />
          </div>
          <div className="text-center">
            <input type="email" className="w-full sm:w-2/4 outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Email" name="email" ref={email} required />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full sm:w-2/4 relative">
              <input type={showPassword ? "text" : "password"} className="w-full outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Password" name="password" ref={password} required />
              <div className="bg-[#232323] px-4 text-center absolute top-0 right-0 h-full flex items-center cursor-pointer">
                <p className="text-white" onClick={() => setShowPassword((prev) => !prev)}>Show</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center -mt-2 sm:-mt-5">
            <div className="w-full sm:w-2/4 flex justify-between items-center px-2">
              <p className="text-[#3C3C3C] text-center ">
                <Link to="/" className="underline decoration-blue-500">
                  Skip
                </Link>
              </p>
              <p className="text-[#3C3C3C] text-center ">
                <Link to="/login" className="underline decoration-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="cursor-pointer bg-[#232323] text-white text-xl font-light border-1 border-black py-2 px-8">Create Account</button>
          </div>
        </form>

      </div>
      <div className="py-20">
        <Subscribe />
      </div>
    </div>
  )
};

export default SignUp;
