import TitleText from "@/shared/TitleText";
import { motion } from "framer-motion";
import FoodItem from "./FoodItem";
import { useTranslation } from "react-i18next";
type Props = {
  theme: string;
};

const ProductItems = ({ theme }: Props) => {
  const { t } = useTranslation();
  return (
    <section className="mb-8 mt-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <TitleText title={t("find_more_foods")} theme={theme} />
      </motion.div>
      <FoodItem theme={theme} />
    </section>
  );
};

export default ProductItems;
