import { foodMenuItems } from "@/assets/foodmenuimagecarousel/items";
import { FoodMenuType } from "@/shared/types";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FoodItem from "../home/ProductItems/FoodItem";
import { motion } from "framer-motion";
import PaginationPage from "../home/PaginationPage";
import { useTranslation } from "react-i18next";
import ThemeContext from "@/Providers/ThemeProvider";

const FoodMenuDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { foodMenuName } = useParams<{ foodMenuName: string }>();
  const [foodMenu, setFoodMenu] = useState<Array<FoodMenuType>>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (foodMenuName) {
      const decodedName = decodeURIComponent(foodMenuName);
      const foodMenuDetail = foodMenuItems.filter(
        (foods) => foods.name === decodedName
      );

      if (foodMenuDetail.length > 0) {
        setFoodMenu(foodMenuDetail);
      } else {
        navigate("/page-not-found");
      }
    }
  }, [foodMenuName, navigate]);

  if (foodMenu.length === 0) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="py-20 w-[95%] md:w-5/6 mx-auto">
      {foodMenu.map((items) => (
        <div key={items.name}>
          <motion.div
            className="h-40 md:h-64 lg:h-80 xl:h-96 lg:mt-5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: {
                opacity: 0,
                y: -50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <img
              src={items.image}
              alt="main image"
              className="w-full lg:w-[70%] md:w-5/6 mx-auto h-full object-cover rounded-md"
            />
          </motion.div>
          <p
            className={`${
              theme === "light" ? "" : "text-textColorForDarkMode"
            } mt-5 text-2xl font-bold`}
          >
            {t("relate_foods")} {items.name}
          </p>
          <p
            className={`${
              theme === "light" ? "" : "text-textColorForDarkMode"
            } text-sm`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
            eligendi dolorem culpa autem id odit magni reiciendis explicabo
            quis.
          </p>
          <FoodItem theme={theme} />
          <PaginationPage />
        </div>
      ))}
    </div>
  );
};

export default FoodMenuDetail;
