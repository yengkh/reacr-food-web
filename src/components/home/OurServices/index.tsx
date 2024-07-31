import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faTruck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

type Props = {};

const OurServies = (props: Props) => {
  return (
    <section className=" mx-auto gap-6 md:flex justify-between mt-10 mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="flex gap-4 md:w-1/2 py-12 bg-appBarBackgroundColor text-white px-2 mb-10 md:mb-0 rounded-md"
      >
        <FontAwesomeIcon icon={faTruck} style={{ fontSize: "40px" }} />
        <p>Free Delivery If Speend More Then 20$</p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -150,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        className="flex gap-4 md:w-1/2 py-12 bg-appBarBackgroundColor text-white px-2 rounded-md"
      >
        <FontAwesomeIcon icon={faShop} style={{ fontSize: "40px" }} />
        <p>Our Resterant Open 7 days a week from 7am to 10pm</p>
      </motion.div>
    </section>
  );
};

export default OurServies;
