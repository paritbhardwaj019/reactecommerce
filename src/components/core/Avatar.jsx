import { useDispatch, useSelector } from "react-redux";
import { changeUserModal, changeNavState } from "../../exports";

export default function Avatar({ name, onMobile }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);
  return (
    <>
      {state.userImage === null ? (
        <div
          className={`w-7 h-7 rounded-full bg-violet-600 text-white font-bold text-center cursor-pointer ${
            !onMobile ? "md:inline-block hidden" : "inline-block md:hidden"
          }`}
          onClick={() => {
            dispatch(changeNavState());
            dispatch(changeUserModal(!state.isUserModalClicked));
          }}
        >
          <p className="flex items-center w-full h-full justify-center">
            {name.charAt(0)}
          </p>
        </div>
      ) : (
        <img
          src={state.userImage}
          alt=""
          className={`w-7 h-7 rounded-full text-center cursor-pointer ${
            !onMobile ? "md:inline-block hidden" : "inline-block md:hidden"
          }`}
          onClick={() => {
            dispatch(changeNavState());
            dispatch(changeUserModal(!state.isUserModalClicked));
          }}
        />
      )}
    </>
  );
}
