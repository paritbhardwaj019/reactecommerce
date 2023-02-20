import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StarRating, addCartProducts } from "../../exports";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({
  _id,
  title,
  rating,
  discountedPrice,
  originalPrice,
  images,
  goto,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image = images || [];
  return (
    <>
      <section className="border-[#ECF0F1] border-2 rounded-2xl relative flex flex-col w-full max-w-xs cursor-pointer justify-between">
        <>
          <div onClick={() => (window.location.href = goto)}>
            <div className="absolute bg-[#27AE60]/10 ] text-[#27AE60] font-bold px-2 py-1 text-xs rounded-full top-2 left-2">
              {" "}
              -36%
            </div>
            <div className="border-b-2 border-[#ECF0F1] flex justify-center items-center overflow-hidden py-4 px-2">
              <img
                src={image[0]}
                alt={title}
                className="rounded-xl w-60 h-60"
              />
            </div>
          </div>
        </>
        <div className="py-3 px-4 flex flex-col">
          <h2 className="text-md font-semibold text-black mb-2">{title}</h2>
          <StarRating rating={rating} />
          <p className="font-semibold text-xl mt-2">₹{discountedPrice}</p>
          <button
            className="w-full bg-violet-600 py-2 text-lg font-bold text-white rounded-md mt-2 hover:bg-violet-800"
            onClick={() => {
              const product = {
                _id,
                title,
                rating,
                discountedPrice,
                originalPrice,
                images,
<<<<<<< HEAD
=======
                quantity: 1,
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
              };
              dispatch(addCartProducts(product));
              navigate("/cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
}
