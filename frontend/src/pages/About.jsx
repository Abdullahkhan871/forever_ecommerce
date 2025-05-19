import Title from "../components/Title"
import { assets } from "../assets/assets"
import Subscribe from "../components/Subscribe";
const About = () => {
  return (
    <div>
      <div>
        <Title
          title={"About"}
          titleTwo={"Us"}
        />
        <div className="flex flex-col lg:flex-row items-center  gap-5">
          <div className="">
            <img src={assets.about_img} alt="" className="w-full max-w-[400px] h-full object-cover" />
          </div>
          <div className=" lg:flex-1/4 flex flex-col gap-4 text-lg text-[#6D6D6D] leading-8">
            <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            </p>
            <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <p className="text-[#6D6D6D] font-bold">Our Mission</p>
            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </div>
      <div>
        <Title
          title={"Why"}
          titleTwo={"Choose Us"}
        />
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap">
          <div className="flex flex-col justify-center gap-4 p-20 border-1 border-[#ABABAB]">
            <h2 className="text-[#2A2A2A] text-lg font-semibold">Quality Assurance:</h2>
            <p className="leading-8 text-lg text-[#6D6D6D]">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="flex flex-col justify-center gap-4 p-20 border-1 border-[#ABABAB]">
            <h2 className="text-[#2A2A2A] text-lg font-semibold">Convenience: </h2>
            <p className="leading-8 text-lg text-[#6D6D6D]">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="flex flex-col justify-center gap-4 p-20 border-1 border-[#ABABAB]">
            <h2 className="text-[#2A2A2A] text-lg font-semibold">Exceptional Customer Service:</h2>
            <p className="leading-8 text-lg text-[#6D6D6D]">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
      <div className="py-20">

        <Subscribe />
      </div>
    </div>
  )
};

export default About;
