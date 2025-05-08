import React, { useEffect, useMemo, useState } from "react";
import ProductItem from "../components/ProductItem";
import { products } from "../assets/assets";
import { assets } from "../assets/assets";
const Collection = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [filers, setFilters] = useState({
    men: "",
    women: "",
    kids: "",
    topwear: "",
    winterwear: "",
    bottomwear: "",
  });
  const [option, setOption] = useState("");

  const result = useMemo(() => {
      let x  = [...products]
  
    if(filers.men || filers.women || filers.kids){
      x = x.filter((list) => {
        return (
          list.category.toLowerCase() == filers.men.toLowerCase() ||
          list.category.toLowerCase() == filers.women.toLowerCase() ||
          list.category.toLowerCase() == filers.kids.toLowerCase()
        );
      });
    }
  
        console.log(filers)
    
    if (filers.topwear || filers.winterwear || filers.bottomwear){
      x = x.filter((list) => {
        return (
          list.subCategory.toLowerCase() == filers.topwear.toLowerCase() ||
          list.subCategory.toLowerCase() == filers.winterwear.toLowerCase() ||
          list.subCategory.toLowerCase() == filers.bottomwear.toLowerCase()
        );
      });
  
    }
    if (option == "lowToHigh") {
      return x.sort((a, b) => a.price - b.price);
    } else if (option == "highToLow") {
      return x.sort((a, b) => b.price - a.price);
    } else {
       return x;
    }
  }, [option, filers.men,filers.women,filers.kids,filers.topwear,filers.winterwear,filers.bottomwear]);


  function checkVlv(e) {
    if (e.target.checked) {
      setFilters((prev) => ({ ...prev, [e.target.name]: e.target.id }));
    }
    else {
      setFilters((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }


  return (
    <div className="sm:grid sm:grid-cols-10 gap-2 md:gap-8 lg:gap-10 pt-10">
      <div className="sm:col-span-2">
        <div className="flex flex-col gap-2 sm:gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-5">
            <h2 className="text-lg sm:text-2xl text-[#343434]">FILTERS</h2>
            <img
              className={`w-2 ${
                filterToggle ? "rotate-90" : "rotate-0"
              } sm:hidden cursor-pointer`}
              src={assets.dropdown_icon}
              alt=""
              onClick={() => setFilterToggle(!filterToggle)}
            />
          </div>
          <div
            className={`border-1 border-[#C8C8C8] p-2 sm:p-4 sm:space-y-2 text-[#272727] transition-all duration-75 ease-in overflow-hidden ${
              filterToggle ? "" : "hidden"
            } sm:block`}
          >
            <p className="text-[#212121]">Categories</p>
            <div className="flex items-center gap-1 ">
              <input
                type="checkbox"
                name="men"
                id="men"
                onChange={(e) => checkVlv(e)}
                
              />

              <label htmlFor="men">Men</label>
            </div>
            <div className="flex items-center gap-1 ">
              <input type="checkbox" name="women" id="women"  onChange={(e) => checkVlv(e)}
                 />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex items-center gap-1 ">
              <input type="checkbox" name="kids" id="kids"             onChange={(e) => checkVlv(e)}
                />
              <label htmlFor="kids">Kids</label>
            </div>
          </div>
          <div
            className={`border-1 border-[#C8C8C8] p-2 sm:p-4 sm:space-y-2 text-[#272727] overflow-hidden ${
              filterToggle ? "" : "hidden"
            } sm:block`}
          >
            <p className="text-[#212121]">TYPE</p>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="topwear" id="topwear"             onChange={(e) => checkVlv(e)}
                 />
              <label htmlFor="topwear">Topwear</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="bottomwear" id="bottomwear"             onChange={(e) => checkVlv(e)}
                />
              <label htmlFor="bottomwear">Bottomwear</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="winterwear" id="winterwear"             onChange={(e) => checkVlv(e)}
                />
              <label htmlFor="winterwear">Winterwear</label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-10 sm:col-span-8">
        <div className="flex flex-col gap-4">
          <div className="collectionSort flex gap-2 sm:flex-row justify-between">
            <div className="flex flex-col gap-2  text-center  ">
              <div className="flex items-center sm:gap-2 gap-1">
                <p className="text-lg sm:text-2xl lg:text-4xl text-[#707070]">
                  ALL
                </p>
                <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-[#343434]">
                  COLLECTIONS
                </p>
                <div className="mt-0.5 sm:mt-2 w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700 rounded-full"></div>
              </div>
            </div>
            <div>
              <select
                className="border-1 text-sm sm:text-base px-2 py-1 sm:py-2 sm:px-4 rounded-lg"
                name="productSort"
                id="productSort"
                onChange={(e) => setOption(e.target.value)}
                value={option}
              >
                <option value="relavent">Sort by: Relavent</option>
                <option value="lowToHigh">Sort by: low to high</option>
                <option value="highToLow">Sort by: high to low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {result.length > 0 &&
              result.map((list) => (
                <ProductItem
                  key={list._id}
                  id={list._id}
                  image={list.image[0]}
                  name={list.name}
                  price={list.price}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
