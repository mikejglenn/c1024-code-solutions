import { createContext, ReactNode, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};
export const CartContext = createContext(defaultCartValue);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product): void {
    setCart([...cart, product]);
  }

  const cartContextValues = { cart, addToCart };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
