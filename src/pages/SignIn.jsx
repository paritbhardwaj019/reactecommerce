import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputControl, auth, provider } from "../exports";
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();

  const data = useSelector((state) => state.reactecommerce);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (response) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  signInWithEmailAndPassword(auth, state.email, state.password)
    .then((userCredential) => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });

  if (data.user) {
    return navigate("/");
  }
  return (
    <section className="w-full flex flex-col justify-center bg-slate-200 font-firacode items-center min-h-screen relative px-4">
      <div className="bg-white rounded-md py-6 px-8 shadow-lg shadow-black/10 text-center space-y-4 max-w-md">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Welcome Back 👋</h1>
          <p className="text-md font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full">
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
        </div>
        <button className="font-medium text-white bg-[#8E44AD] rounded-md w-full py-3 hover:bg-[#72368a]">
          Login
        </button>
        <button
          className="font-medium text-white bg-[#8E44AD] rounded-md w-full py-3 hover:bg-[#72368a]"
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </button>
        <p className="text-sm">
          Don't have account?{" "}
          <Link to={"/signup"} className="underline text-violet-600">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
