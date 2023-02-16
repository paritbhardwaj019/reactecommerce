import { useDispatch, useSelector } from "react-redux";
import { Tag, updateProducts, baseURL } from "../../exports";

export default function Category() {
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
    <section className="py-6 bg-navbar">
      <div className="max-w-5xl mx-auto w-full font-firacode px-6">
        <h1 className="text-center text-white font-bold tracking-wide text-3xl">
          COLLECTION
        </h1>
        <div className="flex w-full flex-wrap md:space-x-2 items-center mt-4 md:justify-between">
          {state.allCategories.map((currElem, index) => {
            return (
              <div onClick={() => dispatch(filterProduct(currElem))}>
                <Tag name={currElem.toUpperCase()} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
