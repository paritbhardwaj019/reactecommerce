import { StarRating } from "../../exports";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function CartProduct({
  _id,
  title,
  rating,
  discountedPrice,
  images,
  originalPrice,
  quantity = 1,
}) {
  const image = images || [];

  const [quantity1, setQuantity1] = useState(quantity);

  const IncreaseQuantity = () => {
    quantity1 >= 10 ? setQuantity1(1) : setQuantity1(quantity1 + 1);
  };
  const decreaseQuantity = () => {
    quantity1 <= quantity ? setQuantity1(1) : setQuantity1(quantity1 - 1);
  };

  return (
    <>
      <section className="md:flex-row flex-col flex w-full justify-between md:items-center items-start border-b border-night last:pb-0 space-x-24 last:border-none pb-2">
        <div className="flex justify-between items-center">
          <div className="w-14 h-10 md:w-28 md:h-24 rounded-lg overflow-hidden mr-4">
            <img src={image[0]} alt="Product Image" className="w-full h-full" />
          </div>
          <div className="flex flex-col items-start justify-between max-w-[260px]">
            <h1 className="font-semibold text-xs md:text-xl">{title}</h1>
            <StarRating rating={rating} cart={true} />
            <h2 className="font-bold md:text-xl text-xs">₹{discountedPrice}</h2>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <p className="text-slate-400 hidden md:inline">Quantity: </p>
          <div className="border border-night rounded-md px-2 md:px-4 py-1 flex items-center space-x-2 mt-2 md:mt-0">
            <FaMinus
              className="text-sm md:text-md"
              onClick={decreaseQuantity}
            />
            <p className="text-sm md:text-lg">{quantity1}</p>
            <FaPlus className="text-sm md:text-md" onClick={IncreaseQuantity} />
          </div>
        </div>
      </section>
    </>
  );
}
