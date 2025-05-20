import React from 'react'
import logo from "../assets/logo.png"
import AddItem_icon from "../assets/AddItem_icon.png"
import ListItem_icon from "../assets/ListItem_icon.png"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeToken } from '../redux/actions/tokenAction'

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem("token")
        dispatch(removeToken())
        navigate('/login')
    }

    return (
        <div className='mx-auto px-4 lg:px-20 min-h-screen text-gray-600 bg-[#f9fafb] overflow-hidden'>
            <div className='min-h-[10vh] py-4 flex items-center justify-between gap-5 border-b border-[#e5e7eb] relative'>
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="" className='w-[max(10%,150px)] object-cover' />
                    </NavLink>
                </div>
                <div>
                    <button className='bg-[#4c5562] text-white font-medium py-2 px-6 sm:px-10 rounded-full cursor-pointer' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="min-h-[90vh] flex">
                <div className="w-[20%] py-6 sm:py-10 border-r border-[#e5e7eb] flex flex-col gap-4">
                    <NavLink to="/" className={({ isActive }) => `border border-r-0 rounded-l-md py-2 px-4 font-semibold flex items-center gap-2 ${isActive ? "border-[#c586a5] bg-[#ffebf5]" : "border-[#e5e7eb]"}`}>
                        <img src={AddItem_icon} alt="" className='min-w-5 w-5' />
                        <p className='hidden sm:block'>Add Items</p>
                    </NavLink>
                    <NavLink to="/list" className={({ isActive }) => `border border-r-0 rounded-l-md py-2 px-4 font-semibold flex items-center gap-2  ${isActive ? "border-[#c586a5] bg-[#ffebf5]" : "border-[#e5e7eb]"}`}>

                        <img src={ListItem_icon} alt="" className=' min-w-5 w-5' />
                        <p className='hidden sm:block'>List Items</p>
                    </NavLink>
                    <NavLink to="/Orders" className={({ isActive }) => `border border-r-0 rounded-l-md py-2 px-4 font-semibold flex items-center gap-2 ${isActive ? "border-[#c586a5] bg-[#ffebf5]" : "border-[#e5e7eb]"}`}>
                        <img src={ListItem_icon} alt="" className='min-w-5 w-5' />
                        <p className='hidden sm:block'>Orders</p>
                    </NavLink>
                </div>
                <div className="flex-1 py-6 sm:py-10 px-5 sm:px-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
