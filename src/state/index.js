const items =
  localStorage.getItem("shoptreeCart") !== null
    ? JSON.parse(localStorage.getItem("shoptreeCart"))
    : [];

export const initialState = {
  allProducts: [],
  isNavClicked: false,
  isGridView: false,
  user: null,
  allCategories: [],
  page: 1,
  limit: 9,
  searchQuery: null,
  isUserModalClicked: false,
  singleProduct: {},
  userImage: null,
  currentRelatedProducts: null,
  currentCategory: null,
  cartProducts: items,
  cartTotalQuantity: 0,
  cartTotalMoney: 0,
};
