import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductCard,
  changeGridState,
  baseURL,
  updateProducts,
  Pagination,
  updateProductBySearch,
} from "../exports";

export default function ProductPage({ products }) {
  const [input, setInput] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  const filterProduct = (category) => {
    const url =
      category !== "All"
        ? `${baseURL}/api/v1/products?category=${category}`
        : `${baseURL}/api/v1/products/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.data;
        dispatch(updateProducts(filteredProducts));
      });
  };

  return (
    <section className="font-firacode w-full space-y-6 mb-4 py-10">
      <div className="w-full flex justify-between items-center max-w-screen-2xl mx-auto font-firacode">
        <div className="px-6 max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none py-1 bg-slate-200 px-2 rounded-md w-full"
            value={input}
            onChange={async (e) => {
              await setInput(e.target.value);
              dispatch(updateProductBySearch(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-between space-x-4 w-26 px-6">
          <button
            className={`rounded-sm font-bold ${
              state.isGridView ? "bg-[rgb(236,240,241)] px-3 py-2" : ""
            }`}
            onClick={() => dispatch(changeGridState(true))}
          >
            <span className="hidden md:inline-block">List View</span>
            <FaListUl className="md:hidden" />
          </button>
          <button
            className={`rounded-sm font-bold ${
              !state.isGridView ? "bg-[rgb(236,240,241)] px-3 py-2" : ""
            }`}
            onClick={() => dispatch(changeGridState(false))}
          >
            <span className="hidden md:inline-block">Grid View</span>
            <HiViewGrid className="md:hidden" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-start max-w-screen-2xl mx-auto font-firacode px-6 md:space-x-40">
        <div className="w-30 flex flex-col items-start space-y-8 mr-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black">Category</h2>
            <div className="flex flex-col space-y-2">
              {state.allCategories.map((category) => {
                return (
                  <p
                    className="text-md font-medium hover:underline cursor-pointer"
                    onClick={() => filterProduct(category)}
                  >
                    {category}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="gap-8 grid-cols-1 grid-rows-1 grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((currElem) => {
            return (
              <ProductCard
                key={currElem._id}
                {...currElem}
                goto={currElem._id}
              />
            );
          })}
        </div>
      </div>
      <Pagination />
    </section>
  );
}
