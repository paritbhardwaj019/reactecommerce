export default function Total() {
  return (
    <>
      <section className="max-w-4xl px-6 mt-4 md:mt-0 w-full">
        <h1 className="font-bold text-xl mb-4">Cart Total</h1>
        <div className="px-4 py-4 border-night border-2 rounded-lg">
          <div>
            <span className="text-md font-semibold">ENTER PROMO CODE</span>
            <div className="flex justify-between items-stretch mt-1 mb-4">
              <input
                type="text"
                className="outline-none border-night border rounded-tl-md rounded-bl-md px-2 text-sm py-2 w-full"
              />
              <button className="px-4 bg-gray-700 rounded-tr-md rounded-br-md text-white py-1 text-sm">
                Submit
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full items-center text-md">
            <h1 className="text-black font-medium">Shipping cost</h1>
            <span className="text-gray-500">$80</span>
          </div>
          <div className="flex justify-between w-full items-center text-md mt-3">
            <h1 className="text-black font-medium">Discount</h1>
            <span className="text-gray-500">-$0</span>
          </div>
          <div className="flex justify-between w-full items-center text-md mt-3">
            <h1 className="text-black font-medium">Tax</h1>
            <span className="text-gray-500">+$23</span>
          </div>
          <div className="flex justify-between w-full items-center text-md mt-3">
            <h1 className="text-black font-bold text-lg">Estimated Total</h1>
            <span className="text-gray-500">+$2300</span>
          </div>
        </div>
      </section>
    </>
  );
}
