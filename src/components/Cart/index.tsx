import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux-Cart";
import CartItem from "./CartItem";
import { updateFoodQuantity, removeFoodFromCart } from "@/Redux-Cart/AddToCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyProduct from "@/assets/empty-product/product-is-empty-8044872-6430781.webp";
type Props = {
  theme: string;
};

const Cart = ({ theme }: Props) => {
  const carts = useSelector((store: RootState) => store.cart.foods);
  const dispatch = useDispatch();

  const handleAddQuantity = (id: number) => {
    dispatch(updateFoodQuantity({ id, quantity: +1 }));
  };

  const handleRemoveQuantity = (id: number) => {
    dispatch(updateFoodQuantity({ id, quantity: -1 }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFoodFromCart(id));
    toast.success("Food removed successfully from cart!");
  };

  if (carts.length === 0) {
    return (
      <div className="flex justify-center flex-col items-center w-screen h-screen">
        <img src={EmptyProduct} alt="" />
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          Your cart is empty!
        </p>
      </div>
    );
  }
  return (
    <div className="md:py-16 pt-5 pb-20">
      <div className="w-5/6 mx-auto mt-14 text-sm lg:w-1/2">
        {carts.map((items, key) => (
          <CartItem
            key={key}
            data={items}
            onAddQuantity={handleAddQuantity}
            onRemoveItem={handleRemoveItem}
            onRemoveQuantity={handleRemoveQuantity}
            theme={theme}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
