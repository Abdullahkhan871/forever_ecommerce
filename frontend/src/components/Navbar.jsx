import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../Redux/features/tokenSlice";

const Navbar = ({ toggleSearchBar, setToggleSearchBar }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items)
  const token = useSelector(state => state.token.token)
  const [visible, setvisible] = useState(false);




  function handle() {
    setToggleSearchBar(true)
  }




  return (
    <header className="flex items-center justify-between py-8 border-b-1 border-[#ADADAD]">
      <NavLink to="/">
        <img src={assets.logo} className="w-35" alt="logo" />
      </NavLink>

      <div className="flex gap-8 sm:gap-4 lg:gap-8 items-center">
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8 sm:gap-2 lg:gap:8">
            <li>
              <NavLink
                to="/"
                className="flex flex-col items-center font-medium"
              >
                HOME
                <hr className="w-1/2 border-1 rounded-full border-gray-600 hidden " />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="flex flex-col items-center font-medium"
              >
                COLLECTION
                <hr className="w-1/2 border-1 rounded-full border-gray-600 hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="flex flex-col items-center font-medium"
              >
                ABOUT
                <hr className="w-1/2 border-1 rounded-full border-gray-600 hidden" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex flex-col items-center font-medium"
              >
                CONTACT
                <hr className="w-1/2 border-1 rounded-full border-gray-600 hidden" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 sm:gap-4 lg:gap-8">
          <div onClick={handle}>
            <NavLink to="/collection">
              <img src={assets.search_icon} alt="search_icon" className="w-6" />
            </NavLink>
          </div>
          <div className="hidden group relative sm:block">
            {
              token ? (
                <img src={assets.profile_icon} alt="profile_icon" className="w-6 cursor-pointer" />
              ) : (
                <NavLink to="/login">
                  <img src={assets.profile_icon} alt="profile_icon" className="w-6 cursor-pointer" />
                </NavLink>
              )
            }
            {
              token && (
                <div className="min-w-80 pt-10 px-5 absolute top-0 right-0 font-semibold opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-50">
                  <div className="bg-gray-300 w-full h-full space-y-4 shadow-lg rounded-md p-4">

                    <div className="group">
                      <NavLink
                        to="/order"
                        className="block p-2 text-xl font-medium text-gray-700 border-b border-gray-500 hover:text-gray-900 hover:border-gray-800 transition"
                      >
                        My orders
                      </NavLink>

                    </div>

                    <div className="group">
                      <NavLink
                        to="/login"
                        onClick={() => {
                          dispatch(removeToken());
                        }}
                        className="block p-2 text-xl font-medium text-gray-700 border-b border-gray-500 hover:text-gray-900 hover:border-gray-800 transition"
                      >
                        Logout
                      </NavLink>
                    </div>

                  </div>
                </div>
              )
            }
          </div>

          <div className="relative">
            <NavLink to="/cart">
              <img src={assets.cart_icon} alt="cart_icon" className="w-6" />
              {
                cartItems.length > 0 && (
                  <div className="flex items-center justify-center absolute -bottom-3 -right-1 bg-black p-1 rounded-full w-6 h-6">
                    <span className="text-white text-xs">{cartItems.length}</span>
                  </div>
                )
              }
            </NavLink>
          </div>
          <div className="sm:hidden">
            <img
              src={assets.menu_icon}
              alt="search-menu"
              className="w-6"
              onClick={() => setvisible(true)}
            />
          </div>
        </div>

        {/* Nav Small Screen Sizes */}

        <div
          className={`${visible ? "w-full" : "w-0 overflow-hidden"
            } absolute top-0 bottom-0 right-0 transition-all duration-300 bg-gray-600 h-screen z-99 sm:hidden`}
        >
          <div className="p-4">
            <div className="flex items-center gap-2 text-white">
              <img
                src={assets.dropdown_icon}
                alt=""
                className="w-2 rotate-180"
              />
              <p onClick={() => setvisible(false)} className="font-bold">
                Back
              </p>
            </div>

            <div className="mt-10">
              <nav>
                <ul className="flex flex-col gap-4">
                  <NavLink
                    to="/"
                    onClick={() => setvisible(false)}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    HOME
                  </NavLink>

                  <NavLink
                    to="/collection"
                    onClick={() => setvisible(false)}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    COLLECTION
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setvisible(false)}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    ABOUT
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={() => setvisible(false)}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    CONTACT
                  </NavLink>
                  <NavLink
                    to="/order"
                    onClick={() => setvisible(false)}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    My Order's
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={() => {
                      setvisible(false)
                      dispatch(removeToken())
                    }}
                    className={({ isActive }) =>
                      `
    p-2 border-b-2 text-xl font-medium text-white border-gray-900 ${isActive ? "bg-gray-800" : ""
                      }
                    `
                    }
                  >
                    Logout
                  </NavLink>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
