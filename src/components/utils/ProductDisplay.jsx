import { useSelector } from "react-redux";
import { ProductCard } from "../../exports";

export default function ProductDisplay() {
  const state = useSelector((state) => state.reactecommerce);

  return (
    <>
      <section className="py-10">
        <div className="max-w-5xl mx-auto w-full font-firacode flex md:justify-between items-start px-6 flex-wrap space-y-4 md:space-y-0 justify-center">
          {state.allProducts.slice(0, 3).map((currElem) => {
            return <ProductCard {...currElem} goto={currElem._id} />;
          })}
        </div>
      </section>
    </>
  );
}
