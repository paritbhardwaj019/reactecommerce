import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  baseURL,
  updateSingleProduct,
  ProductDetails,
  RelatedProducts,
  addCurrentRelatedProducts,
} from "../exports";

export default function SingleProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  const fetchDataByCategory = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addCurrentRelatedProducts(data.data));
      });
  };

  const fetchData = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        dispatch(updateSingleProduct(data.data));
        fetchDataByCategory(
          `${baseURL}/api/v1/products?category=${data.data.category}`
        );
      });
  };

  useEffect(() => {
    fetchData(`${baseURL}/api/v1/products/${id}`);
  }, []);
  return (
    <>
      <section className="py-10">
        <ProductDetails {...state.singleProduct} />
        <RelatedProducts {...state.singleProduct} />
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/products">
            <button className="px-4 py-3 font-firacode font-medium bg-violet-600 text-white hover:bg-violet-800 rounded-lg">
              Back to Products
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
