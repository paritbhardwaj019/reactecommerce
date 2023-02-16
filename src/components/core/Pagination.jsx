import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber, baseURL, updateProducts } from "../../exports";

export default function Pagination() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  const fetchData = async (url) => {
    fetch(`${url}?page=${state.page}&limit=9`)
      .then((response) => response.json())
      .then((data) => {
        const products = data.data;
        dispatch(updateProducts(products));
      });
  };

  useEffect(() => {
    fetchData(baseURL + "/api/v1/products");
  }, [state.page]);

  return (
    <>
      <section className="mt-10">
        <div className="max-w-5xl mx-auto w-full font-firacode flex justify-center ">
          <div className="border-2 border-night rounded-md flex items-center">
            <div className="h-full px-2 py-3 flex items-center justify-center cursor-pointer hover:bg-slate-200 border-r-2 border-night">
              <FaAngleLeft
                className="text-2xl"
                onClick={() => dispatch(updatePageNumber(state.page - 1))}
              />
            </div>
            <div className="flex items-center justify-between text-xl underline">
              <p
                className="hover:bg-slate-200 cursor-pointer px-4 py-3"
                onClick={() => dispatch(updatePageNumber(1))}
              >
                1
              </p>
              <p
                className="hover:bg-slate-200 cursor-pointer px-4 py-3"
                onClick={() => dispatch(updatePageNumber(2))}
              >
                2
              </p>
            </div>
            <div
              className="h-full px-2 py-3 flex items-center justify-center cursor-pointer hover:bg-slate-200 border-l-2 border-night"
              onClick={() => dispatch(updatePageNumber(state.page + 1))}
            >
              <FaAngleRight className="text-2xl " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
