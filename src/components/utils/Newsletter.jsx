export default function Newsletter() {
  return (
    <>
      <section className="py-10 bg-navbar">
        <div className="max-w-5xl mx-auto w-full font-firacode px-6">
          <h1 className="text-black font-bold text-center text-4xl">
            Weekly Newsletter {" \n "}
            💌
          </h1>
          <p className="max-w-full text-center mt-3 text-slate-900">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="w-full flex justify-between items-center mt-6">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="w-full rounded-tl-md rounded-bl-md py-2 px-2 outline-none"
            />
            <button className="bg-[#9B59B6] py-2 px-6 rounded-tr-md rounded-br-md text-white font-medium">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
