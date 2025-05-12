import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import RelatedProduct from "../components/RelatedProduct";
import { products } from "../assets/assets";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/features/cartSlice";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState("")
  const [selectSize, setSelectSize] = useState("");


  function findItem() {
    setItem(products.find(list => list._id == id))
  }

  useEffect(() => {
    setMainImage("")
    findItem();
  }, [id])

  function handleAddbtn() {
    if (!selectSize) {
      toast("Select Atleast one size")
      return
    }
    toast("Item Added")
    dispatch(addItem({ ...item, ["sizes"]: selectSize }))
    setSelectSize("")
  }



  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row gap-5 py-2 sm:py-8">
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-4">
            <div className="flex sm:flex-col gap-[1%] h-full">
              {
                item &&
                item.image.map((item, index) => (
                  <img key={index} src={item} alt="" className="h-full w-[24%] sm:h-[24%] sm:w-25 object-cover cursor-pointer"
                    onClick={() => setMainImage(item)}
                  />
                ))
              }
            </div>
            <div>
              {
                item &&
                <img src={mainImage ? mainImage : item.image[0]} alt="" className="w-full h-full object-cover" />
              }
            </div>
          </div>
          {
            item &&
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-medium text-[#3D3D3D]">{item.name}</h2>

                <div className="flex gap-2">
                  <span className="text-sm">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm">(122)</span>
                </div>
              </div>
              <p className="text-3xl text-[#2A2A2A]">{item.price}</p>
              <p className="text-[#555555]">{item.description}</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#656565] font-semibold text-xl">Select Size</h3>
                <div className="flex gap-4">
                  {

                    item.sizes.map(list => (
                      <div key={list} className={`border-1 border-[#EBEBEB] bg-[#FBFBFB] text-[#1D1D1D] h-16 w-16 text-center flex items-center  justify-center cursor-pointer ${selectSize == list ? "border-2 border-[#FF8551]" : "border-1 border-[#EBEBEB]"}
                    `}
                        onClick={() => setSelectSize(list)}
                      >
                        {list.toUpperCase()}
                      </div>
                    ))
                  }


                </div>
              </div>
              <div>
                <button className="py-2 px-4 bg-black text-white font-semibold rounded cursor-pointer" onClick={handleAddbtn}>ADD TO CART</button>
              </div>
              <div className="flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>

          }
        </div>
      </div>
      <div>
        <Title
          title={"Related"}
          titleTwo={"Products"}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {
            item &&
            <RelatedProduct item={item && item} />
          }
        </div>
      </div>
    </div>
  )
};

export default Product;
