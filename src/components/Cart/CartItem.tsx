import { FoodItem } from "@/Redux-Cart/AddToCart";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  data: FoodItem;
  onAddQuantity: (id: number) => void;
  onRemoveQuantity: (id: number) => void;
  onRemoveItem: (id: number) => void;
};

const CartItem = ({
  data,
  onAddQuantity,
  onRemoveQuantity,
  onRemoveItem,
}: Props) => {
  const totalPrice = data.price * data.quantity;

  return (
    <div className="flex flex-col md:flex-row gap-5 mb-8 bg-itemBackgrondColor">
      <div className=" md:w-[400px] lg:w-[500px]">
        <img
          src={data.image}
          alt="product image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 pb-5">
        <p>Name: {data.name}</p>
        <p>Price: ${totalPrice.toFixed(2)}</p>
        <p>Quantity: {data.quantity}</p>
        <div className="flex gap-5 pl-5 pt-2">
          <button
            type="button"
            className="bg-appBarBackgroundColor p-1 h-7 w-7 flex justify-center items-center text-white rounded-md"
            onClick={() => onRemoveQuantity(data.id)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button
            type="button"
            className="bg-appBarBackgroundColor p-1 h-7 w-7 flex justify-center items-center text-white rounded-md"
            onClick={() => onAddQuantity(data.id)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="flex gap-7 mt-5 justify-center items-center lg:justify-start lg:items-start">
          <button
            type="button"
            className="bg-appBarBackgroundColor text-white py-2 px-3 rounded-md"
            onClick={() => onRemoveItem(data.id)}
          >
            Remove
          </button>
          <button
            type="button"
            className="bg-appBarBackgroundColor text-white py-2 px-3 rounded-md"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
