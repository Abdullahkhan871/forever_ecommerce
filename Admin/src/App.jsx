import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddItem from "./pages/AddItem"
import Orders from "./pages/Orders"
import List from './pages/List'
import Login from './pages/Login'
// import SignUp from './pages/Signup'
import { useDispatch, useSelector } from 'react-redux'
import { addToken } from "../src/redux/actions/tokenAction.js"
import axios from 'axios'
import { getItems } from './redux/actions/productAction.js'
import useGetItemsList from './components/useGetItemsList.js'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;


const App = () => {
  const warning = useSelector(state => state.warning)
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)
  const getItemsList = useGetItemsList();

  useEffect(() => {
    dispatch(addToken(localStorage.getItem('token') || ""))
    getItemsList()
  }, [])




  return (
    <>
      <div
        className={`warning absolute rounded-xl top-20 right-4 min-w-[220px] sm:min-w-[300px] h-[80px] p-4 flex items-center justify-center text-white bg-red-500 shadow-lg transition-all duration-300 ease-in-out transform ${warning ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {warning}
      </div>


      <Routes>
        <Route path='/' element={token ? <Dashboard /> : <Navigate to="/login" />}>
          <Route index element={<AddItem />
          } />
          <Route path='list' element={<List />} />
          <Route path='orders' element={<Orders />} />
        </Route>

        <Route path='/login' element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path='*' element={!token ? <Login /> : <Navigate to="/" />} />



        {/* No need of sign up page because admin password gonna be static */}
        {/* <Route path='/signup' element={!token ? <SignUp /> : <Navigate to="/" />} /> */}
      </Routes>
    </>
  )
}

export default App