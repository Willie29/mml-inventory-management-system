"use client";

const initialState = {
  order: {},
};

const addOrder = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_ORDER": {
      return {
        ...state,
        order: action.payload,
      };
    }
    case "DELETE_TO_ORDER": {
      let temp = state.cart.splice(action.payload, 1);
      return {
        ...state,
        order: state.cart,
      };
    }

    case "CLEAR_ORDER": {
      return {
        order: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default addOrder;
