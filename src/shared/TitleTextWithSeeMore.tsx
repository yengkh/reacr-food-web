import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
type Props = {
  title: string;
};

const TitleTextWithSeeMore = ({ title }: Props) => {
  return (
    <div className="flex justify-between mx-2">
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
        <span className="font-bold text-lg md:text-2xl">{title}</span>
      </motion.div>
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
        <span className="hover:underline cursor-pointer">
          <span>See more</span> <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </motion.div>
    </div>
  );
};

export default TitleTextWithSeeMore;
