import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./Redux/features/productsSlice";
const App = () => {
  const products = useSelector(state => state.products);
  const token = useSelector(state => state.token.token);
  const cart = useSelector(state => state.cart.items);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [])


  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-4 relative">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          newestOnTop
          limit={3}
          className="w-full"
          toastClassName="w-full"
          style={{ position: "absolute", top: "40px", maxWidth: "300px" }}
        />
      </div>

      <Navbar toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!token ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={token ? <Orders /> : <Navigate to="/login" />} />
        <Route path="/placeorder" element={token && cart.length > 0 ? <PlaceOrder /> : <Navigate to="/login" />} />
        <Route path="/collection/product/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
