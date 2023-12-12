'use client';

export const addToOrder = (item) => {
  return {
    type: "ADD_TO_ORDER",
    payload: item,
  };
};

export const deleteToOrder = (index) => {
  return {
    type: "DELETE_TO_ORDER",
    payload: index,
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  };
};
