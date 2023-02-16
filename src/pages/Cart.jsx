import { Order, Total, Delivery } from "../exports";

export default function Cart() {
  return (
    <>
      <section className="py-10">
        <div className="max-w-5xl mx-auto font-firacode w-full flex justify-between items-start">
          <div className="flex flex-col">
            <Order />
            <Delivery />
          </div>
          <Total />
        </div>
      </section>
    </>
  );
}
