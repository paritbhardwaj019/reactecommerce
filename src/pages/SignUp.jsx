import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputControl, auth, provider } from "../exports";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useSelector } from "react-redux";

export default function Login() {
  const data = useSelector((state) => state.reactecommerce);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (response) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const hanldeSubmit = async () => {
    if (state.password === state.confirmPassword) {
      await createUserWithEmailAndPassword(auth, state.email, state.password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: state.name,
          });
          navigate("/");
        })
        .catch((error) => {
          setState({ ...state, error: error.message });
        });
    } else {
      setState({ ...state, error: "Passwords Do not Match!" });
    }
  };

  if (data.user) {
    return navigate("/");
  }
  return (
    <section className="w-full flex flex-col justify-center bg-slate-200 font-firacode items-center min-h-screen relative px-4 py-4">
      <div className="bg-white rounded-md py-6 px-8 shadow-lg shadow-black/10 text-center space-y-4 max-w-md">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Welcome 👋</h1>
          <p className="text-md font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full">
          <InputControl
            label={"Name"}
            placeholder="Enter Your Name"
            type={"text"}
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <InputControl
            label={"Email"}
            placeholder="Enter Your Email"
            type={"email"}
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />

          <InputControl
            label={"Password"}
            placeholder="Enter Your Password"
            type={"password"}
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <InputControl
            label={"Confirm Password"}
            placeholder="Confirm Your Password"
            type={"password"}
            value={state.confirmPassword}
            onChange={(e) =>
              setState({ ...state, confirmPassword: e.target.value })
            }
          />
        </div>
        <button
          className="font-medium text-white bg-[#8E44AD] rounded-md w-full py-3 hover:bg-[#72368a]"
          onClick={hanldeSubmit}
        >
          Sign Up
        </button>
        <button
          className="font-medium text-white bg-[#8E44AD] rounded-md w-full py-3 hover:bg-[#72368a]"
          onClick={handleGoogleSignIn}
        >
          Sign Up with Google
        </button>
        <p className="text-sm ">
          Already have account?{" "}
          <Link to={"/signin"} className="underline text-violet-600">
            Sign In
          </Link>
        </p>
        <p>{state.error}</p>
      </div>
    </section>
  );
}
