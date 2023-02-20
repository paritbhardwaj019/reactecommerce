<<<<<<< HEAD
import {
  StarRating,
  getTotal,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../../exports";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
=======
import { StarRating, removeProductFromCart } from "../../exports";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36

export default function CartProduct({
  _id,
  title,
  rating,
  discountedPrice,
  images,
  originalPrice,
  quantity,
}) {
  const image = images || [];
  const dispatch = useDispatch();
<<<<<<< HEAD
  const state = useSelector((state) => state.reactecommerce);

  useEffect(() => {
    dispatch(getTotal());
  }, [state.cartProducts]);

  return (
    <>
      <section className="md:flex-row flex w-full justify-between items-center border-b border-night last:pb-0 last:border-none pb-2">
=======

  const [quantity1, setQuantity1] = useState(quantity);

  const IncreaseQuantity = () => {
    quantity1 >= 10 ? setQuantity1(1) : setQuantity1(quantity1 + 1);
  };
  const decreaseQuantity = () => {
    quantity1 <= 1
      ? dispatch(removeProductFromCart(_id))
      : setQuantity1(quantity1 - 1);
  };

  return (
    <>
      <section className="md:flex-row flex w-full justify-between items-center border-b border-night last:pb-0 last:border-none pb-2 md:space-x-24">
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
        <div className="flex justify-between items-center max-w-4xl w-full">
          <div className="w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden mr-4">
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
              className="text-sm md:text-md cursor-pointer"
<<<<<<< HEAD
              onClick={() => dispatch(decreaseProductQuantity(_id))}
            />
            <p className="text-sm md:text-lg">{quantity}</p>
            <FaPlus
              className="text-sm md:text-md cursor-pointer"
              onClick={() => dispatch(increaseProductQuantity(_id))}
            />
=======
              onClick={decreaseQuantity}
            />
            <p className="text-sm md:text-lg cursor-pointer">{quantity1}</p>
            <FaPlus className="text-sm md:text-md" onClick={IncreaseQuantity} />
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
          </div>
        </div>
      </section>
    </>
  );
}
