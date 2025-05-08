import React from "react";
import Title from "../components/Title";
import CartTotals from "../components/CartTotals";
import CartItem from "../components/CartItem"
import {assets, products} from "../assets/assets"

const Cart = () => {
  // console.log(products)
  return (
    <div className="py-2 sm:py-8">
      <div>
        <Title 
          title={"Your"}
          titleTwo={"CART"}
        />

        <div className="">
          <CartItem
            image={products[0].image[0]}
            title={"Men Round Neck Pure Cotton T-shirt"}
            price={125}
            size={"l"}
            itemCount={10}
           />
        </div>
      </div>
      <div className="sm:flex sm:items-center sm:justify-end w-full mt-20">
                <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-1/4'> 
                  <CartTotals />
                </div>
      </div>
    </div>
  )
};

export default Cart;
