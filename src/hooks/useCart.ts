import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  CartItem,
} from "@/store/cartSlice";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, totalQuantity, totalAmount } = useAppSelector(
    (state) => state.cart
  );

  const addItem = (
    product: Omit<CartItem, "quantity">,
    quantity: number = 1
  ) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const removeItem = (id: string, variant: string) => {
    dispatch(removeFromCart({ id, variant }));
  };

  const updateItemQuantity = (
    id: string,
    variant: string,
    quantity: number
  ) => {
    dispatch(updateQuantity({ id, variant, quantity }));
  };

  const clearAll = () => {
    dispatch(clearCart());
  };

  const getItemQuantity = (id: string, variant: string) => {
    const item = items.find(
      (item) => item.id === id && item.variant === variant
    );
    return item?.quantity || 0;
  };

  const isInCart = (id: string, variant: string) => {
    return items.some((item) => item.id === id && item.variant === variant);
  };

  return {
    items,
    totalQuantity,
    totalAmount,
    addItem,
    removeItem,
    updateItemQuantity,
    clearAll,
    getItemQuantity,
    isInCart,
  };
};
