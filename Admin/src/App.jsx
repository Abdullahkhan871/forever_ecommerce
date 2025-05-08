import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddItem from "./pages/AddItem"
import Orders from "./pages/Orders"
import List from './pages/List'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'

import { addToken } from "../src/redux/actions/tokenAction.js"

export const backendUrl = import.meta.env.VITE_BACKEND_URL;


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)

  useEffect(() => {
    dispatch(addToken(localStorage.getItem('token') || ""))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={token ? <Dashboard /> : <Navigate to="/login" />}>
          <Route index element={<AddItem />
          } />
          <Route path='list' element={<List />} />
          <Route path='orders' element={<Orders />} />
        </Route>

        <Route path='/login' element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!token ? <SignUp /> : <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App