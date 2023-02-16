import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <section className="py-10 bg-[#e74c3c]">
        <div className="max-w-5xl mx-auto w-full font-firacode px-6">
          <div className="md:flex-row justify-between flex-wrap flex flex-col space-y-12 md:space-y-0">
            <div>
              <h4 className="text-2xl font-bold mb-7 text-white">Company</h4>
              <ul className="space-y-2 text-white text-lg">
                <li className="cursor-pointer hover:underline">About us</li>
                <li className="cursor-pointer hover:underline">Our services</li>
                <li className="cursor-pointer hover:underline">
                  Privacy policy
                </li>
                <li className="cursor-pointer hover:underline">
                  Affiliate program
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-7 text-white">Get Help</h4>
              <ul className="space-y-2 text-white text-lg">
                <li className="cursor-pointer hover:underline">FAQ</li>
                <li className="cursor-pointer hover:underline">Shipping</li>
                <li className="cursor-pointer hover:underline">Returns</li>
                <li className="cursor-pointer hover:underline">Order status</li>
                <li className="cursor-pointer hover:underline">
                  Payment options
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-7 text-white">
                Online Shop
              </h4>
              <ul className="space-y-2 text-white text-lg">
                <li className="cursor-pointer hover:underline">Laptops</li>
                <li className="cursor-pointer hover:underline">Cameras</li>
                <li className="cursor-pointer hover:underline">Accessories</li>
                <li className="cursor-pointer hover:underline">Headphones</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-7 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <span className="border-white border-2 rounded-full p-3 hover:bg-slate-200/30 cursor-pointer">
                  <GrInstagram className="text-white text-xl" />
                </span>
                <span className="border-white border-2 rounded-full p-3 hover:bg-slate-200/30 cursor-pointer">
                  <GrTwitter className="text-white text-xl" />
                </span>
                <span className="border-white border-2 rounded-full p-3 hover:bg-slate-200/30 cursor-pointer">
                  <GrFacebookOption className="text-white text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
