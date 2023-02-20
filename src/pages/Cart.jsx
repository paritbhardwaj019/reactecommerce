<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Order, Total, Delivery, getTotal } from "../exports";

export default function Cart() {
  const state = useSelector((state) => state.reactecommerce);
  const dispatch = useDispatch();

  return (
    <>
      <section className="py-10 md:px-52 px-0">
        {state.cartProducts.length != 0 ? (
          <div className="font-firacode w-full md:flex-row justify-between items-start flex flex-col ">
            <div className="flex">
              <Order />
              <Delivery />
            </div>
            <Total total={state.cartTotalMoney} />
=======
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Order, Total, Delivery } from "../exports";

export default function Cart() {
  const state = useSelector((state) => state.reactecommerce);
  console.log(state);
  return (
    <>
      <section className="py-10">
        {state.cartProducts.length != 0 ? (
          <div className="max-w-5xl mx-auto font-firacode w-full md:flex-row justify-between items-start flex flex-col">
            <div className="flex flex-col">
              <Order />
              <Delivery />
            </div>
            <Total />
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
          </div>
        ) : (
          <div className="font-firacode flex flex-col justify-center items-center space-y-6">
            <h1 className="text-lg">Sorry :( Please Shop Some items</h1>
            <Link to={"/products"}>
              <button className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-800 text-white font-firacode text-lg ">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
