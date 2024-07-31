import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  seeQuantity: boolean;
};

const Quantity = ({ seeQuantity }: Props) => {
  const [quantity, setQuantity] = useState(1);

  function showQuntityOption() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function removeQuntity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  return (
    <div className={`${seeQuantity === true ? "" : "hidden"}`}>
      <div>
        <button
          onClick={removeQuntity}
          type="button"
          className="absolute right-20 w-7 h-7 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]"
        >
          <FontAwesomeIcon icon={faMinus} style={{ fontSize: "18px" }} />
        </button>
        <div className="absolute right-[44px] w-8 h-7 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]">
          <p className="text-[16px]">{quantity}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={showQuntityOption}
        className="absolute right-3 w-7 h-7 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]"
      >
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "18px" }} />
      </button>
    </div>
  );
};

export default Quantity;
