import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function StarRating({ rating, cart }) {
  const starRatings = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar
            className={`text-[#F1C40F] text-sm ${!cart ? "md:text-2xl" : ""}`}
          />
        ) : rating >= number ? (
          <FaStarHalfAlt
            className={`text-[#F1C40F] text-sm ${!cart ? "md:text-2xl" : " "}`}
          />
        ) : (
          <FaRegStar
            className={`text-[#2C3E50] text-sm ${!cart ? "md:text-2xl" : ""}`}
          />
        )}
      </span>
    );
  });

  return (
    <div className="flex justify-between w-max space-x-1">{starRatings}</div>
  );
}
