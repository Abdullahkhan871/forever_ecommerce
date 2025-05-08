import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-20">
      <div className="grid md:grid-cols-4 gap-14">
        <div className="col-span-2">
          <img className="w-40 mb-2" src={assets.logo} alt="" />
          <div className="">
            <p className="text-lg text-[#595959]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <h3 className="text-2xl font-semibold text-[#5A5A5A] mb-2">
            COMPANY
          </h3>
          <Link className="text-lg text-[#595959]" to="/">
            Home
          </Link>
          <Link className="text-lg text-[#595959]" to="/about">
            About us
          </Link>
          <Link className="text-lg text-[#595959]" to="/placeOrder">
            Delivery
          </Link>
          <Link className="text-lg text-[#595959]" to="/">
            Privacy policy
          </Link>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-semibold text-[#5A5A5A] mb-2">
            GET IN TOUCH
          </h3>
          <p className="text-lg text-[#595959]">+1-212-456-7890</p>
          <Link
            className="text-lg text-[#595959]"
            to="https://github.com/Abdullahkhan871"
          >
            Abdullah khan
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
