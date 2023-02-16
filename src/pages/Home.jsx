import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Header,
  Category,
  ProductDisplay,
  Trusted,
  Services,
  Newsletter,
  updateUser,
  auth,
} from "../exports";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(updateUser(user.displayName));
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <Header />
      <Category />
      <ProductDisplay />
      <Trusted />
      <Services />
      <Newsletter />
    </>
  );
}
