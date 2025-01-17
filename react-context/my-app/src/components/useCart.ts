import { useContext } from 'react';
import { CartContext, CartValue } from './CartContext';

export function useCart(): CartValue {
  const value = useContext(CartContext);
  if (!value) throw new Error('useCart must be used inside a CartProvider');
  return value;
}
