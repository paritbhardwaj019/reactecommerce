import { Link } from "react-router-dom";
import { HeaderImage } from "../../exports";

export default function Header() {
  return (
    <section>
      <div className="max-w-5xl mx-auto w-full font-firacode">
        <div className="flex md:flex-row md:justify-between items-start py-10 flex-col-reverse justify-center px-6">
          <div className="max-w-md mt-4 md:mt-0">
            <p className="text-[rgb(155,89,182)] font-medium text-md">
              WELCOME TO
            </p>
            <h1 className="text-black text-4xl font-bold tracking-wider">
              SHOPTREE
            </h1>
            <p className="text-black font-regular mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Link to="/products">
              <button className="mt-6 bg-violet-600 px-6 py-2 text-white font-medium hover:bg-violet-800">
                SHOP NOW
              </button>
            </Link>
          </div>
          <div>
            <figure>
              <img
                src={HeaderImage}
                alt="Hero Image"
                className="max-w-sm w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
