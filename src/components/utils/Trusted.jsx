import { motion } from "framer-motion";
import { Facebook, Google, Netlify, Firebase, Heroku } from "../../exports";
import { categoryVariants } from "../../variants";

export default function Trusted() {
  const companies = [Facebook, Google, Netlify, Firebase, Heroku];
  return (
    <section className="py-6 bg-navbar">
      <motion.div
        className="max-w-5xl w-full mx-auto font-firacode px-6"
        variants={categoryVariants}
        initial="initial"
        animate="animate"
        transition={"transition"}
      >
        <h1 className="text-center text-2xl font-semibold">
          Trusted by 10+ Companies ❤️
        </h1>
        <div className="flex w-full justify-between md:mt-2 flex-wrap space-y-4 mt-4 items-center">
          {companies.map((currElem, index) => {
            return <img src={currElem} alt={currElem} key={index} />;
          })}
        </div>
      </motion.div>
    </section>
  );
}
