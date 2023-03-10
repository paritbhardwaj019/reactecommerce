import { createSlice } from "@reduxjs/toolkit";
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
      const findedProduct = state.cartProducts.findIndex(
        (item) => item._id === actions.payload._id
      );
      if (findedProduct >= 0) {
        state.cartProducts[findedProduct].quantity +=
          actions.payload.quantity || 1;
      } else {
        const tempProduct = {
          ...actions.payload,
          quantity: actions.payload.quantity || 1,
        };
        state.cartProducts = [...state.cartProducts, tempProduct];
      }
    },
    removeProductFromCart: (state, actions) => {
      state.cartProducts = state.cartProducts.filter((currElem) => {
        return currElem._id != actions.payload;
      });
    },
    getTotal: (state, actions) => {
      let { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { discountedPrice, quantity } = cartItem;
          const itemTotal = discountedPrice * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalMoney = total;
    },

    increaseProductQuantity: (state, actions) => {
      const findedProduct = state.cartProducts.findIndex(
        (item) => item._id === actions.payload
      );
      if (state.cartProducts[findedProduct].quantity >= 10) {
        state.cartProducts[findedProduct].quantity = 1;
      } else {
        state.cartProducts[findedProduct].quantity += 1;
      }
    },
    decreaseProductQuantity: (state, actions) => {
      const findedProduct = state.cartProducts.findIndex(
        (item) => item._id === actions.payload
      );
      if (state.cartProducts[findedProduct].quantity <= 1) {
        state.cartProducts = state.cartProducts.filter((currElem) => {
          return currElem._id !== actions.payload;
        });
      } else {
        state.cartProducts[findedProduct].quantity -= 1;
      }
    },
    removeProductFromCart: (state, actions) => {
      state.cartProducts = state.cartProducts.filter((currElem) => {
        return currElem._id != actions.payload;
      });
    },
    updateSearchText: (state, actions) => {
      state.searchQuery = actions.payload;
    },
    updateAllProducts: (state, actions) => {
      if (state.searchQuery) {
        state.allProducts = state.allProducts.filter((currElem) => {
          return currElem.title.toLowerCase().includes(state.searchQuery);
        });
      }
      state.allProducts = [...state.allProducts];
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
  changeUserModal,
  updateSingleProduct,
  updateUserImage,
  addCurrentRelatedProducts,
  addCartProducts,
  removeProductFromCart,
  getTotal,
  increaseProductQuantity,
  decreaseProductQuantity,
  updateSearchText,
  updateAllProducts,
} = ecommerceSlice.actions;
