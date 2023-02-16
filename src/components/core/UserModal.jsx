import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, signOut } from "firebase/auth";
import { auth, updateUserImage, changeUserModal } from "../../exports";

export default function UserModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteUser = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute right-4 z-20 border-2 border-[#ECF0F1] font-firacode rounded-md cursor-pointer mt-2 overflow-hidden bg-white">
      <p
        className="font-medium hover:bg-slate-300 px-4 py-2 border-b-2 border-[#ECF0F1]"
        onClick={() => {
          handleSignout();
          dispatch(updateUserImage(null));
        }}
      >
        Sign Out
      </p>
      <p
        className="font-medium hover:bg-slate-300 px-4 py-2 border-b-2 border-[#ECF0F1]"
        onClick={() => {
          handleDeleteUser();
          dispatch(updateUserImage(null));
        }}
      >
        Delete User
      </p>
      <p
        className="font-medium hover:bg-slate-300 px-4 py-2"
        onClick={() => dispatch(changeUserModal(false))}
      >
        Close
      </p>
    </div>
  );
}
