import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/actions/tokenAction";
import useShowWarning from "../components/useShowWarning";

const Login = () => {
    const dispatch = useDispatch();
    const showWarning = useShowWarning();

    const [email, setEmail] = useState("akhan283785@gmail.com")
    const [password, setPassword] = useState("Abdullah@1")
    const [showPassword, setShowPassword] = useState(false);


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


        if (!emailPattern.test(email)) {
            showWarning("Check your email")
            return
        }
        if (!passwordPattern.test(password)) {
            showWarning("must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number")
            return
        }

        try {
            const response = await axios.post(backendUrl + "/api/user/admin", { email, password })

            if (!response.data.token) {
                console.log(response)
                showWarning(response.data.message)
                return;
            }
            dispatch(addToken(response.data.token))
            localStorage.setItem("token", response.data.token);
        }
        catch (error) {
            console.log(error)
            showWarning(error.data.message)
        }

    }



    return (
        <div className="h-screen py-20 flex flex-col justify-center gap-8 px-20 xl:px-0">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="prata-regular text-4xl text-center text-[#414141]">Login</h2>
                    <div className="w-10 h-0.5 bg-[#484848]"></div>
                </div>
                <form className="flex flex-col gap-4 sm:gap-6" onSubmit={onSubmitHandler}>
                    <div className="text-center">
                        <input type="email" className="w-full sm:w-2/4 outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full sm:w-2/4 relative">
                            <input type={showPassword ? "text" : "password"} className="w-full outline-none border-1 border-black py-1 px-2 text-[#6A6A6A] text-lg" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
                            <div className="bg-[#232323] px-4 text-center absolute top-0 right-0 h-full flex items-center cursor-pointer" onClick={() => setShowPassword((pre) => !pre)}>
                                <p className="text-white">Show</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center -mt-2 sm:-mt-5">
                        <div className="w-full sm:w-2/4 flex justify-between items-center px-2">

                            <p className="cursor-pointer text-[#3C3C3C] text-center underline decoration-blue-500" onClick={() => showWarning("Not Availble")}>Forgot your password?</p>
                            {/* <p className="text-[#3C3C3C] text-center underline decoration-blue-500">
                                <Link to="/signup">
                                    Create account
                                </Link>
                            </p> */}
                            <p className="cursor-pointer text-[#3C3C3C] text-center underline decoration-blue-500" onClick={() => showWarning("Not Availble")}>
                                Create account
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="cursor-pointer bg-[#232323] text-white text-xl font-light border-1 border-black py-2 px-8">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
