import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Home,
  SignIn,
  SignUp,
  Navbar,
  Footer,
  updateProducts,
  baseURL,
  NavModal,
  ProductPage,
  useGetCategories,
  updateUser,
  auth,
  UserModal,
  changeUserModal,
  SingleProduct,
  Cart,
  updateUserImage,
  AboutPage,
  ContactPage,
} from "./exports";
import { onAuthStateChanged } from "firebase/auth";
export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reactecommerce);

  const fetchData = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const products = data.data;
        dispatch(updateProducts(products));
      });
  };

  useEffect(() => {
    fetchData(baseURL + "/api/v1/products");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(updateUser(user.displayName));
        if (user.photoURL) {
          dispatch(updateUserImage(user.photoURL));
        }
      } else {
        dispatch(updateUser(null));
        dispatch(changeUserModal(false));
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem("shoptreeCart", JSON.stringify(state.cartProducts));
  }, [state.cartProducts]);

  useGetCategories(baseURL + "/api/v1/products/categories");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {state.isNavClicked && <NavModal />}
        {state.isUserModalClicked && <UserModal />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/products"
            element={<ProductPage products={state.allProducts} />}
          />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path={`/${window.location.pathname}/:id`}
            element={<SingleProduct />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<h1>404 Page</h1>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
