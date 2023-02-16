import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <div className="space-x-6 flex items-center justify-between">
        <NavLink
          className="text-lg font-regular text-white hidden md:inline-block hover-animate relative"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="text-lg font-regular text-white hidden md:inline-block hover-animate relative"
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          className="text-lg font-regular text-white hidden md:inline-block hover-animate relative"
          to="/products"
        >
          PRODUCTS
        </NavLink>
        <NavLink
          className="text-lg font-regular text-white hidden md:inline-block hover-animate relative"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </div>
    </>
  );
}
