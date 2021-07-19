import React, { useContext } from 'react';

const CartContext = React.createContext({
  cart: {},
  addToCart: () => null,
  removeFromCart: () => null,
  cleanCart: () => null,
});

export default CartContext;
export const useCartContext = () => useContext(CartContext);
