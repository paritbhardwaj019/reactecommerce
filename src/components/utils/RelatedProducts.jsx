import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ProductCard } from "../../exports";

export default function RelatedProducts() {
  const state = useSelector((state) => state.reactecommerce);
  const dispatch = useDispatch();

  const relatedProducts = state.currentRelatedProducts || [];

  const AllProducts = relatedProducts.map((currElem) => {
    return <ProductCard {...currElem} key={currElem._id} goto={currElem._id} />;
  });

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto font-firacode px-6">
          <h1 className="text-xl font-bold mb-6">Related Products</h1>
          <div className="flex items-center md:justify-between md:space-x-4 flex-wrap justify-center space-y-6 md:flex-nowrap md:space-y-0">
            {AllProducts}
          </div>
        </div>
      </section>
    </>
  );
}
