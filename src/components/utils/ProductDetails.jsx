import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  StarRating,
  ProductImages,
  Quantity,
  addCartProducts,
} from "../../exports";

export default function ProductDetails({
  _id,
  title,
  rating,
  discountedPrice,
  images,
  originalPrice,
}) {
  const [quantity, setQuantity] = useState(1);

  const image = images || [];
  const [num, setNum] = useState(0);

  const navigate = useNavigate();

  const state = useSelector((state) => state.reactecommerce);
  const dispatch = useDispatch();

  return (
    <>
      <section className="max-w-7xl mx-auto w-full flex items-start px-2 font-firacode space-x-4 md:space-x-10">
        <div className="flex flex-col justify-between items-start max-w-xl">
          <div className="rounded-2xl border-2 border-night md:px-4 md:w-[36rem] flex justify-center items-center md:h-[36rem] md:py-4 select-none w-44 h-44 overflow-hidden">
            <img
              src={image[num]}
              alt={title}
              className="w-full h-full rounded-lg"
            />
          </div>
          <ProductImages image={image} setNum={setNum} />
        </div>
        <div className="md:space-y-6 space-y-2">
          <h1 className="md:text-4xl font-medium text-md">{title}</h1>
          <StarRating rating={rating} />
          <div>
            <h1 className="md:text-4xl font-semibold text-2xl">
              ₹{discountedPrice}
            </h1>
            <p className="md:text-lg text-slate-400 text-sm">
              MRP: <span className="line-through">₹{originalPrice}</span>
            </p>
          </div>
          <div className="max-w-full w-full flex justify-center items-stretch space-x-2">
            <button
              className="w-full bg-violet-600 md:py-4 py-2 md:text-xl text-xs font-bold text-white rounded-md 2 hover:bg-violet-800"
              onClick={() => {
                const product = {
                  _id,
                  title,
                  rating,
                  discountedPrice,
                  images,
                  originalPrice,
                  quantity,
                };
                dispatch(addCartProducts(product));
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="w-full">
            <h1 className="md:text-xl font-semibold mb-4 text-md">
              Description
            </h1>
            <p className="border-night border-2 px-4 py-2 md:text-xl rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus nesciunt temporibus iste veniam sunt non harum dolorum
              totam nam? Repellendus aliquid libero, nostrum eum corporis
              corrupti delectus nemo recusandae quam quia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
