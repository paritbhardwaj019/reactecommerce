// Pages
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProductPage from "../pages/ProductPage";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

// Components
import Navbar from "../components/utils/Navbar";
import Footer from "../components/utils/Footer";
import NavLinks from "../components/core/NavLinks";
import Avatar from "../components/core/Avatar";
import NavModal from "../components/core/NavModal";
import StarRating from "../components/core/StarRating";
import ProductCard from "../components/utils/ProductCard";
import Pagination from "../components/core/Pagination";
import ProductDisplay from "../components/utils/ProductDisplay";
import Services from "../components/utils/Services";
import Trusted from "../components/utils/Trusted";
import Newsletter from "../components/utils/Newsletter";
import Category from "../components/utils/Category";
import Header from "../components/utils/Header";
import Tag from "../components/core/Tag";
import InputControl from "../components/core/InputControl";
import UserModal from "../components/core/UserModal";
import ProductDetails from "../components/utils/ProductDetails";
import ProductImages from "../components/core/ProductImages";
import Quantity from "../components/core/Quantity";
import RelatedProducts from "../components/utils/RelatedProducts";
import PageHeader from "../components/core/PageHeader";
import Order from "../components/utils/Order";
import Total from "../components/utils/Total";
import Delivery from "../components/utils/Delivery";
import CartProduct from "../components/core/CartProduct";

// Images
import HeaderImage from "../assets/headerImage.svg";
import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Netlify from "../assets/netlify.svg";
import Firebase from "../assets/firebase.svg";
import Heroku from "../assets/heroku.svg";

// Url
const baseURL = "https://ecommerceapi-production-2dad.up.railway.app";

// Miscellaneous
import {
  updateProducts,
  changeNavState,
  changeGridState,
  updateCatgories,
  updatePageNumber,
  updateSearchQuery,
  filterProductBySearch,
  updateUser,
  changeUserModal,
  updateSingleProduct,
  updateUserImage,
  addCurrentRelatedProducts,
  addCartProducts,
  updateProductBySearch,
  removeProductFromCart,
<<<<<<< HEAD
  getTotal,
  increaseProductQuantity,
  decreaseProductQuantity,
=======
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
} from "../slice/index";
import { useGetCategories } from "../hooks/useGetCategories";
import { auth, app, provider } from "../config/firebase.config";

export {
  Home,
  SignIn,
  SignUp,
  Footer,
  Navbar,
  updateProducts,
  baseURL,
  NavLinks,
  Avatar,
  changeNavState,
  NavModal,
  ProductPage,
  StarRating,
  ProductCard,
  changeGridState,
  updateCatgories,
  useGetCategories,
  Pagination,
  ProductDisplay,
  Services,
  Trusted,
  Newsletter,
  Category,
  Header,
  HeaderImage,
  Tag,
  Facebook,
  Google,
  Netlify,
  Firebase,
  Heroku,
  updatePageNumber,
  updateSearchQuery,
  filterProductBySearch,
  InputControl,
  auth,
  app,
  updateUser,
  changeUserModal,
  UserModal,
  SingleProduct,
  updateSingleProduct,
  ProductDetails,
  ProductImages,
  Quantity,
  Cart,
  provider,
  updateUserImage,
  RelatedProducts,
  addCurrentRelatedProducts,
  PageHeader,
  AboutPage,
  ContactPage,
  Order,
  Total,
  Delivery,
  CartProduct,
  addCartProducts,
  updateProductBySearch,
  removeProductFromCart,
<<<<<<< HEAD
  getTotal,
  increaseProductQuantity,
  decreaseProductQuantity,
=======
>>>>>>> fb9257a9f0e932d4f5f629cfc88d7a96bc274b36
};
