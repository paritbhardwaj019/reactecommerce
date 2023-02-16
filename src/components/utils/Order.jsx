import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../../exports";

export default function Order() {
  const state = useSelector((state) => state.reactecommerce);
  const dispatch = useDispatch();

  return (
    <>
      <section className="max-w-4xl px-6">
        <h1 className="font-bold text-xl mb-4">Order</h1>
        <div className="border-2 border-night rounded-lg py-2 px-3 space-y-2 pb-2 ">
          {state.cartProducts.map((currELem) => {
            return <CartProduct {...currELem} />;
          })}
        </div>
      </section>
    </>
  );
}
