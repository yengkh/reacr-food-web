import { useSelector } from "react-redux";
import { RootState } from "@/Redux-Cart";

const Cart = () => {
  const carts = useSelector((store: RootState) => store.cart.foods);
  console.log(carts);
  return <div className="mt-20">Cart</div>;
};

export default Cart;
