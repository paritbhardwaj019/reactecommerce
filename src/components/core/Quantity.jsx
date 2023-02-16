import { FaMinus, FaPlus } from "react-icons/fa";

export default function Quantity({ quantity, setQuantity }) {
  const IncreaseQuantity = () => {
    quantity >= 10 ? setQuantity(1) : setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="border-2 border-night rounded-lg px-4 md:py-2 flex justify-between items-center md:space-x-2 py-2 space-x-2">
        <FaMinus
          className="md:text-md text-sm cursor-pointer"
          onClick={decreaseQuantity}
        />
        <p className="md:text-xl text-md font-semibold">{quantity}</p>
        <FaPlus
          className="md:text-md text-sm cursor-pointer"
          onClick={IncreaseQuantity}
        />
      </div>
    </>
  );
}
