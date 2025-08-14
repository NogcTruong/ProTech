import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart, addToCart } from "@/store/cartSlice";

const CART_STORAGE_KEY = "techpro_cart";

export const useCartPersistence = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: any) => state.cart);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart.items && parsedCart.items.length > 0) {
          dispatch(clearCart());
          parsedCart.items.forEach((item: any) => {
            dispatch(addToCart(item));
          });
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (cart && (cart.items?.length > 0 || cart.totalQuantity === 0)) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  return null;
};
