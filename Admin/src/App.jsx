import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddItem from "./pages/AddItem"
import Orders from "./pages/Orders"
import List from './pages/List'
import Login from './pages/Login'
import SignUp from './pages/Signup'


export const backendUrl = import.meta.VITE_BACKEND_URL;


const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<AddItem />} />
          <Route path='list' element={<List />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App