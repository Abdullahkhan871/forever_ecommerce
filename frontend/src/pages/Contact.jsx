import React from "react";
import Title from "../components/Title"
import {assets} from "../assets/assets"
import Subscribe from "../components/Subscribe";
const Contact = () => {
  return (
    <div>
      <div>

      <Title
        title={"About"}
        titleTwo={"Us"}
        />
       <div className="flex flex-col lg:flex-row items-center justify-center  gap-5">
        <div  className="">
          <img src={assets.contact_img} alt=""  className="w-full max-w-[400px] h-full object-cover"/>
        </div>
        <div className="flex flex-col gap-4 text-lg text-[#6D6D6D] leading-8">
            <p className="text[#4E4E4E] text-2xl font-semibold">Our Store</p>
            <p className="text-lg text-[#6D6D6D]">54709 Willms Station 
Suite 350, Washington, USA</p>
            <p className="text-lg text-[#6D6D6D]">Tel: (415) 555‑0132</p>
            <p className="text-lg text-[#6D6D6D]">Email: greatstackdev@gmail.com</p>
            <p className="text[#4E4E4E] text-2xl font-semibold">Careers at Forever</p>
            <p className="text-lg text-[#6D6D6D]">Learn more about our teams and job openings.</p>
        </div>
        </div>
       </div>
       <div className="py-20">

       <Subscribe />
       </div>
    </div>
  )
};

export default Contact;
