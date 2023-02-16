import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavLinks, Avatar, changeNavState } from "../../exports";
import { FaUser, FaShoppingCart, FaBars, FaOutdent } from "react-icons/fa";

export default function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  return (
    <>
      <nav className="font-firacode w-full h-14 bg-navbar flex items-center justify-between md:px-8 px-4 md:shadow-md md:shadow-slate-500/10">
        <Link to="/">
          <div className="text-white font-bold tracking-wider text-xl cursor-pointer">
            SHOPTREE
          </div>
        </Link>
        <NavLinks />
        <div className="flex justify-between md:space-x-8 items-center space-x-6">
          <div>
            {!(state.user === null) ? (
              <Avatar name={state.user} />
            ) : (
              <Link to="/signin">
                <FaUser className="text-white text-xl cursor-pointer hidden md:inline-block" />
              </Link>
            )}
          </div>
          <div className="relative">
            <div className="p-[2px] bg-[#E74C3C] rounded-full absolute -right-2 -top-2 text-[10px] flex justify-center items-center text-white font-bold w-full">
              {state.cartProducts.length}
            </div>
            <Link to="/cart">
              <FaShoppingCart className="text-white text-xl cursor-pointer" />
            </Link>
          </div>
          <div className="md:hidden">
            {!state.isNavClicked ? (
              <FaBars
                className="text-white text-xl cursor-pointer"
                onClick={() => dispatch(changeNavState())}
              />
            ) : (
              <FaOutdent
                className="text-white text-xl cursor-pointer"
                onClick={() => dispatch(changeNavState())}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
