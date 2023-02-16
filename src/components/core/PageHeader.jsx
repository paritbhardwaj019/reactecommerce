import { Link } from "react-router-dom";

export default function PageHeader({ text }) {
  return (
    <>
      <h1 className="font-firacode text-center max-w-full py-10 text-2xl">
        {text}
      </h1>

      <div className="max-w-full text-center pb-10">
        <Link to={"/"}>
          <button className="bg-violet-600 px-4 py-3 rounded-lg hover:bg-violet-800 text-white font-firacode text-lg ">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}
