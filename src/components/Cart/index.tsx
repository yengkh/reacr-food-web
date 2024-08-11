import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux-Cart";
import CartItem from "./CartItem";
import { updateFoodQuantity, removeFoodFromCart } from "@/Redux-Cart/AddToCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyProduct from "@/assets/empty-product/product-is-empty-8044872-6430781.webp";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import ThemeContext from "@/Providers/ThemeProvider";

const Cart = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const { t } = useTranslation();
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
    toast.success(t("remove_success_fully"));
  };

  if (carts.length === 0) {
    return (
      <div className={`flex justify-center flex-col items-center h-screen`}>
        <img src={EmptyProduct} alt="" />
        <p className={theme === "light" ? "" : "text-textColorForDarkMode"}>
          {t("emty_cart")}
        </p>
      </div>
    );
  }
  return (
    <div className={`min-h-screen py-12`}>
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
