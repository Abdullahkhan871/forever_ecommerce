import Title from "../components/Title";
import CartTotals from "../components/CartTotals";
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className="py-2 sm:py-8">
      <div>
        {
          cartItems.length > 0 ?
            <Title
              title={"Your"}
              titleTwo={"CART"}
            />
            :
            <Title
              title={"NO"}
              titleTwo={"Item"}
            />

        }
        <div className="">
          {
            cartItems.length > 0 && cartItems.map((item) => (
              <CartItem
                item={item}
                key={`${item._id}-${item.sizes}`}
              />
            ))
          }
        </div>
      </div>
      {
        cartItems.length > 0 && (
          <div className="sm:flex sm:items-center sm:justify-end w-full mt-20">
            <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-1/4'>
              <CartTotals />
            </div>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
