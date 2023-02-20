import { NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, changeNavState } from "../../exports";
import { motion } from "framer-motion";
import { navModalVariants } from "../../variants";

export default function NavModal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  return (
    <motion.div
      className="bg-navbar rounded-md md:hidden max-w-48 w-48 fixed right-4 top-16 shadow-lg shadow-black/10 font-firacode z-10"
      variants={navModalVariants}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <div className="w-full flex flex-col space-y-4 py-4 items-center tracking-wider">
        <NavLink
          to="/"
          className="font-medium text-white text-md"
          onClick={() => {
            dispatch(changeNavState());
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="font-medium text-white text-md"
          onClick={() => {
            dispatch(changeNavState());
          }}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/products"
          className="font-medium text-white text-md"
          onClick={() => {
            dispatch(changeNavState());
          }}
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/contact"
          className="font-medium text-white text-md"
          onClick={() => {
            dispatch(changeNavState());
          }}
        >
          CONTACT
        </NavLink>
        {!(state.user === null) ? (
          <Avatar name={state.user} onMobile={true} />
        ) : (
          <Link to="/signin">
            <FaUser
              className="text-white text-xl cursor-pointer inline-block md:hidden"
              onClick={() => dispatch(changeNavState())}
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
