/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, ReactNode } from "react";
import { Coffee } from "../components/Card";
import { produce } from 'immer'; // library to avoid immutability state tree

// Type for TypeScript
export interface CartItem extends Coffee{
  quantity: number;
}
export interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (Coffee: CartItem) => void;
}
export interface CartContextProviderProps {
  children: ReactNode; // This allows any component wrapped in CartContextProvider to be able to access the provided context.
}

// Shopping Cart Context
export const CartContext = createContext({} as CartContextType);

// Create the Provider
export function CartContextProvider({ children } : CartContextProviderProps) {
  // CartItems
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add Items to CartContext
  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex((item) => item.id === coffee.id); // return -1 when not found

    const newCart = produce(cartItems, (draft) => { // produce a new state based on previous state while maintaining immutable updates
      if (coffeeAlreadyExistsInCart < 0) { // if does not exist
        draft.push(coffee); // add coffee to array
      }
      else { // if exist
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity; // update existing item quantity
      }
    })
    setCartItems(newCart); // create new cart

    // This function is responsible for adding items to the shopping cart context (cartItems), either by adding a new item if it doesn't exist or updating the quantity if the item already exists in the cart. It ensures immutability by using a function like produce and then updates the state accordingly using setCartItems.
  }

  return (
    <CartContext.Provider value={{cartItems, addCoffeeToCart}}>
      {children}
    </CartContext.Provider>
  )
}