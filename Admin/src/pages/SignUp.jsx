import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)



    return (
        <div className="h-screen py-20 flex flex-col justify-center gap-8 px-20 xl:px-0">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="prata-regular text-4xl text-center text-[#414141]">Sign Up</h2>
                    <div className="w-10 h-0.5 bg-[#484848]"></div>
                </div>

                <form className="flex flex-col gap-4 sm:gap-6">
                    <div className="text-center">
                        <input type="text" className="w-full sm:w-2/4 outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Name" required />
                    </div>
                    <div className="text-center">
                        <input type="email" className="w-full sm:w-2/4 outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Email" required />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full sm:w-2/4 relative">
                            <input type={showPassword ? "text" : "password"} className="w-full outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Password" required />
                            <div className="bg-[#232323] px-4 text-center absolute top-0 right-0 h-full flex items-center cursor-pointer" onClick={() => setShowPassword((pre) => !pre)}>
                                <p className="text-white">Show</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center -mt-2 sm:-mt-5">
                        <div className="w-full sm:w-2/4 flex justify-start items-center px-2">
                            <p className="text-[#3C3C3C] text-center ">
                                <Link to="/login" className="underline decoration-blue-500">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-[#232323] text-white text-xl font-light border-1 border-black py-2 px-8">Create</button>
                    </div>
                </form>

            </div>
        </div>
    )
};

export default SignUp;
