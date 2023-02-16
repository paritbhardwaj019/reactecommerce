import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "../state";

const ecommerceSlice = createSlice({
  name: "reactecommerce",
  initialState,
  reducers: {
    changeNavState: (state, actions) => {
      state.isNavClicked = !state.isNavClicked;
    },
    updateProducts: (state, actions) => {
      state.allProducts = actions.payload;
    },
    changeGridState: (state, actions) => {
      state.isGridView = actions.payload;
    },
    updateUser: (state, actions) => {
      state.user = actions.payload;
    },
    updateCatgories: (state, actions) => {
      state.allCategories = actions.payload;
    },
    updatePageNumber: (state, actions) => {
      if (state.page > 2) {
        state.actions = 1;
      } else if (state.page < 1) {
        state.actions = 2;
      }
      state.page = actions.payload;
    },
    updateSearchQuery: (state, actions) => {
      state.searchQuery = actions.payload;
    },
    filterProductBySearch: (state, actions) => {
      state.allProducts = state.allProducts.filter((currElem) => {
        currElem.name.toLowerCase().includes(actions.payload);
      });
    },
    changeUserModal: (state, actions) => {
      state.isUserModalClicked = actions.payload;
    },
    updateSingleProduct: (state, actions) => {
      state.singleProduct = actions.payload;
    },
    updateUserImage: (state, actions) => {
      state.userImage = actions.payload;
    },
    addCurrentRelatedProducts: (state, actions) => {
      state.currentRelatedProducts = actions.payload;
    },
    addCartProducts: (state, actions) => {
      const itemIndex = state.cartProducts.findIndex(
        (currElem) => currElem._id === actions.payload._id
      );

      state.cartProducts =
        itemIndex >= 0
          ? [...(state.cartProducts[itemIndex].quantity += quantity)]
          : [...state.cartProducts, actions.payload];
    },
  },
});

export default ecommerceSlice.reducer;
export const {
  changeNavState,
  updateProducts,
  changeGridState,
  updateUser,
  updateCatgories,
  updatePageNumber,
  updateSearchQuery,
  filterProductBySearch,
  changeUserModal,
  updateSingleProduct,
  updateUserImage,
  addCurrentRelatedProducts,
  addCartProducts,
} = ecommerceSlice.actions;
