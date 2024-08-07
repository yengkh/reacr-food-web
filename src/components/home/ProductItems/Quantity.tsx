import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  seeQuantity: boolean;
  quantity: number;
  removeQuntity: () => void;
  showQuntityOption: () => void;
};

const Quantity = ({
  seeQuantity,
  quantity,
  removeQuntity,
  showQuntityOption,
}: Props) => {
  return (
    <div className={`${seeQuantity === false ? "hidden" : ""} `}>
      <button
        onClick={removeQuntity}
        type="button"
        className="absolute right-[76px] w-6 h-6 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]"
      >
        <FontAwesomeIcon icon={faMinus} style={{ fontSize: "14px" }} />
      </button>
      <div className="absolute right-[40px] w-8 h-6 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]">
        <p className="text-[14px] font-bold">{quantity}</p>
      </div>
      <button
        type="button"
        onClick={showQuntityOption}
        className="absolute right-3 w-6 h-6 top-[110px] rounded-md flex justify-center items-center bg-white md:top-[140px]"
      >
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "14px" }} />
      </button>
    </div>
  );
};

export default Quantity;
