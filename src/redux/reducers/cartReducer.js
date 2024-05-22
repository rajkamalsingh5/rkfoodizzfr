
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        samosa: {
          quantity: 0,
          price: 15,
        },
        CheeseBurger: {
          quantity: 0,
          price: 50,
        },
        cola: {
          quantity: 0,
          price: 45,
        },
        jalebi: {
          quantity: 0,
          price: 15,
        },
        roll: {
          quantity: 0,
          price: 100,
        },
        burgerWithFries: {
          quantity: 0,
          price: 150,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  samosaIncrement: (state) => {
    state.cartItems.samosa.quantity += 1;
  },
  CheeseBurgerIncrement: (state) => {
    state.cartItems.CheeseBurger.quantity += 1;
  },
  colaIncrement: (state) => {
    state.cartItems.cola.quantity += 1;
  },
  jalebiIncrement: (state) => {
    state.cartItems.jalebi.quantity += 1;
  },
  rollIncrement: (state) => {
    state.cartItems.roll.quantity += 1;
  },
  burgerWithFriesIncrement: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  samosaDecrement: (state) => {
    state.cartItems.samosa.quantity -= 1;
  },
  CheeseBurgerDecrement: (state) => {
    state.cartItems.CheeseBurger.quantity -= 1;
  },
  colaDecrement: (state) => {
    state.cartItems.cola.quantity -= 1;
  },
  jalebiDecrement: (state) => {
    state.cartItems.jalebi.quantity -= 1;
  },
  rollDecrement: (state) => {
    state.cartItems.roll.quantity -= 1;
  },
  burgerWithFriesDecrement: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
    state.cartItems.samosa.price *
        state.cartItems.samosa.quantity +
        state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
        state.cartItems.cola.price *
        state.cartItems.cola.quantity +
      state.cartItems.jalebi.price *
        state.cartItems.jalebi.quantity +
      state.cartItems.roll.price *
        state.cartItems.roll.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      samosa: {
        quantity: 0,
        price: 15,
      },
      cheeseBurger: {
        quantity: 0,
        price: 50,
      },
      cola: {
        quantity: 0,
        price: 45,
      },
      jalebi: {
        quantity: 0,
        price: 15,
      },
      roll: {
        quantity: 0,
        price: 100,
      },
      burgerWithFries: {
        quantity: 0,
        price: 150,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
